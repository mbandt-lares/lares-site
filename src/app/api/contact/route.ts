import { NextResponse } from "next/server";

const UPSTREAM_ERROR = "We couldn't send your request. Please try again.";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message } = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address" },
      { status: 400 }
    );
  }
  if ((name != null && typeof name !== "string") || (message != null && typeof message !== "string")) {
    return NextResponse.json({ ok: false, error: "Invalid contact details" }, { status: 400 });
  }

  const token = process.env.AIRTABLE_ACCESS_TOKEN?.trim();
  const baseId = process.env.AIRTABLE_BASE_ID?.trim();
  const tableId = process.env.AIRTABLE_TABLE_ID?.trim();
  if (!token || !baseId || !tableId) {
    return NextResponse.json({ ok: false, error: "Contact form is temporarily unavailable" }, { status: 503 });
  }

  let airtableResponse: Response;
  try {
    airtableResponse = await fetch(`https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(tableId)}`, {
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
    return NextResponse.json({ ok: false, error: UPSTREAM_ERROR }, { status: 502 });
  }

  if (!airtableResponse.ok) {
    return NextResponse.json({ ok: false, error: UPSTREAM_ERROR }, { status: 502 });
  }

  let result: unknown;
  try {
    result = await airtableResponse.json();
  } catch {
    return NextResponse.json({ ok: false, error: UPSTREAM_ERROR }, { status: 502 });
  }
  if (typeof result !== "object" || result === null || !("id" in result) ||
      typeof result.id !== "string" || !/^rec[A-Za-z0-9]+$/.test(result.id)) {
    return NextResponse.json({ ok: false, error: UPSTREAM_ERROR }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
