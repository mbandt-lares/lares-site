import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import { POST } from "./route";

const realFetch = globalThis.fetch;
const originalEnv = {
  AIRTABLE_ACCESS_TOKEN: process.env.AIRTABLE_ACCESS_TOKEN,
  AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
  AIRTABLE_TABLE_ID: process.env.AIRTABLE_TABLE_ID,
};
beforeEach(() => {
  process.env.AIRTABLE_ACCESS_TOKEN = "test-token";
  process.env.AIRTABLE_BASE_ID = "appTest";
  process.env.AIRTABLE_TABLE_ID = "tblTest";
});
afterEach(() => {
  globalThis.fetch = realFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});

function request(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

test("forwards the unchanged contact contract and confirms a successful upstream write", async () => {
  let sent: unknown;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, "https://api.airtable.com/v0/appTest/tblTest");
    sent = JSON.parse(String(options?.body));
    assert.equal(options?.method, "POST");
    assert.equal((options?.headers as Record<string, string>).Authorization, "Bearer test-token");
    assert.ok(options?.signal);
    return Response.json({ id: "recTest123" }, { status: 200 });
  };
  const response = await POST(request({ name: " Ada ", email: " ada@example.com ", message: "Who is this for: Myself" }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.deepEqual(sent, { fields: { Name: "Ada", Email: "ada@example.com", Message: "Who is this for: Myself" } });
});

test("rejects invalid email without contacting upstream", async () => {
  globalThis.fetch = async () => { throw new Error("upstream should not be called"); };
  const response = await POST(request({ name: "Ada", email: "invalid", message: "" }));
  assert.equal(response.status, 400);
  assert.equal((await response.json()).ok, false);
});

test("accepts the legacy email-only payload", async () => {
  let sent: unknown;
  globalThis.fetch = async (_url, options) => {
    sent = JSON.parse(String(options?.body));
    return Response.json({ id: "recLegacy123" }, { status: 200 });
  };
  const response = await POST(request({ email: "legacy@example.com" }));
  assert.equal(response.status, 200);
  assert.deepEqual(sent, { fields: { Name: "", Email: "legacy@example.com", Message: "" } });
});

test("returns a client error for malformed JSON", async () => {
  globalThis.fetch = async () => { throw new Error("upstream should not be called"); };
  const response = await POST(new Request("http://localhost/api/contact", { method: "POST", body: "{" }));
  assert.equal(response.status, 400);
  assert.equal((await response.json()).ok, false);
});

test("does not claim success when Airtable rejects the submission", async () => {
  globalThis.fetch = async () => new Response("failure", { status: 503 });
  const response = await POST(request({ name: "Ada", email: "ada@example.com", message: "" }));
  assert.equal(response.status, 502);
  assert.equal((await response.json()).ok, false);
});

test("returns 503 without fetching when Airtable configuration is missing", async () => {
  globalThis.fetch = async () => { throw new Error("upstream should not be called"); };
  for (const key of ["AIRTABLE_ACCESS_TOKEN", "AIRTABLE_BASE_ID", "AIRTABLE_TABLE_ID"] as const) {
    const value = process.env[key];
    delete process.env[key];
    const response = await POST(request({ email: "ada@example.com" }));
    assert.equal(response.status, 503, key);
    assert.equal((await response.json()).ok, false);
    process.env[key] = value;
  }
});

test("does not claim success without a valid created record id", async () => {
  for (const payload of [{ fields: { Email: "ada@example.com" } }, { id: "invalid" }]) {
    globalThis.fetch = async () => Response.json(payload, { status: 200 });
    const response = await POST(request({ email: "ada@example.com" }));
    assert.equal(response.status, 502);
    assert.equal((await response.json()).ok, false);
  }
});

test("does not claim success when Airtable returns malformed JSON", async () => {
  globalThis.fetch = async () => new Response("not json", { status: 200 });
  const response = await POST(request({ email: "ada@example.com" }));
  assert.equal(response.status, 502);
  assert.equal((await response.json()).ok, false);
});

test("does not claim success when the bounded upstream request times out", async () => {
  globalThis.fetch = async (_url, options) => {
    assert.ok(options?.signal);
    throw new DOMException("Timed out", "TimeoutError");
  };
  const response = await POST(request({ name: "Ada", email: "ada@example.com", message: "" }));
  assert.equal(response.status, 502);
  assert.equal((await response.json()).ok, false);
});
