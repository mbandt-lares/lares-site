import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { POST } from "./route";

const realFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = realFetch; });

function request(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

test("forwards the unchanged contact contract and confirms a successful upstream write", async () => {
  let sent: unknown;
  globalThis.fetch = async (_url, options) => {
    sent = JSON.parse(String(options?.body));
    assert.equal(options?.method, "POST");
    assert.ok(options?.signal);
    return new Response("ok", { status: 200 });
  };
  const response = await POST(request({ name: " Ada ", email: " ada@example.com ", message: "Who is this for: Myself" }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.deepEqual(sent, { name: "Ada", email: "ada@example.com", message: "Who is this for: Myself" });
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
    return new Response("ok", { status: 200 });
  };
  const response = await POST(request({ email: "legacy@example.com" }));
  assert.equal(response.status, 200);
  assert.deepEqual(sent, { name: "", email: "legacy@example.com", message: "" });
});

test("returns a client error for malformed JSON", async () => {
  globalThis.fetch = async () => { throw new Error("upstream should not be called"); };
  const response = await POST(new Request("http://localhost/api/contact", { method: "POST", body: "{" }));
  assert.equal(response.status, 400);
  assert.equal((await response.json()).ok, false);
});

test("does not claim success when Sheets rejects the submission", async () => {
  globalThis.fetch = async () => new Response("failure", { status: 503 });
  const response = await POST(request({ name: "Ada", email: "ada@example.com", message: "" }));
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
