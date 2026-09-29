const MAX_BODY_BYTES = 16 * 1024;
const UPSTREAM_ERROR = "We couldn't send your request. Please try again.";

function reply(res, status, body) {
  res.status(status).json(body);
}

async function readBody(req) {
  const declaredLength = Number(req.headers?.["content-length"]);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    throw new Error("body too large");
  }

  let body = req.body;
  if (body === undefined) {
    const chunks = [];
    let size = 0;
    for await (const chunk of req) {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) throw new Error("body too large");
      chunks.push(chunk);
    }
    body = Buffer.concat(chunks).toString("utf8");
  }

  const raw = typeof body === "string" || Buffer.isBuffer(body)
    ? body
    : JSON.stringify(body);
  if (Buffer.byteLength(raw) > MAX_BODY_BYTES) throw new Error("body too large");
  return typeof body === "string" || Buffer.isBuffer(body)
    ? JSON.parse(raw.toString())
    : body;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return reply(res, 405, { ok: false, error: "Method not allowed" });
  }

  let body;
  try {
    body = await readBody(req);
  } catch {
    return reply(res, 400, { ok: false, error: "Invalid request body" });
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return reply(res, 400, { ok: false, error: "Invalid request body" });
  }

  const { name, email, message } = body;
  if (typeof email !== "string" || email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return reply(res, 400, { ok: false, error: "Enter a valid email address" });
  }
  if ((name != null && (typeof name !== "string" || name.length > 200)) ||
      (message != null && (typeof message !== "string" || message.length > 10000))) {
    return reply(res, 400, { ok: false, error: "Invalid contact details" });
  }

  const token = process.env.AIRTABLE_ACCESS_TOKEN?.trim();
  const baseId = process.env.AIRTABLE_BASE_ID?.trim();
  const tableId = process.env.AIRTABLE_TABLE_ID?.trim();
  if (!token || !baseId || !tableId) {
    return reply(res, 503, { ok: false, error: "Contact form is temporarily unavailable" });
  }

  let upstream;
  try {
    upstream = await fetch(`https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(tableId)}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: typeof name === "string" ? name.trim() : "",
          Email: email.trim(),
          Message: typeof message === "string" ? message : "",
        },
      }),
      signal: AbortSignal.timeout(8000),
    });
  } catch {
    return reply(res, 502, { ok: false, error: UPSTREAM_ERROR });
  }

  if (!upstream.ok) {
    return reply(res, 502, { ok: false, error: UPSTREAM_ERROR });
  }

  let result;
  try {
    result = await upstream.json();
  } catch {
    return reply(res, 502, { ok: false, error: UPSTREAM_ERROR });
  }
  if (typeof result !== "object" || result === null ||
      typeof result.id !== "string" || !/^rec[A-Za-z0-9]+$/.test(result.id)) {
    return reply(res, 502, { ok: false, error: UPSTREAM_ERROR });
  }

  return reply(res, 200, { ok: true });
}
