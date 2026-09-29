import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import handler from "../api/contact.mjs";

const originalFetch = globalThis.fetch;
const originalEnv = {
  AIRTABLE_ACCESS_TOKEN: process.env.AIRTABLE_ACCESS_TOKEN,
  AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
  AIRTABLE_TABLE_ID: process.env.AIRTABLE_TABLE_ID,
};

afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});

function configure() {
  process.env.AIRTABLE_ACCESS_TOKEN = "test-token";
  process.env.AIRTABLE_BASE_ID = "appTest";
  process.env.AIRTABLE_TABLE_ID = "tblTest";
}

async function invoke({ method = "POST", body = { email: "a@example.com" }, headers = {} } = {}) {
  const res = {
    headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.statusCode = code; return this; },
    json(value) { this.body = value; return this; },
  };
  await handler({ method, body, headers }, res);
  return res;
}

test("creates the expected Airtable fields for an email-only submission", async () => {
  configure();
  let request;
  globalThis.fetch = async (url, options) => {
    request = { url, options };
    return { ok: true, json: async () => ({ id: "rec123ABC" }) };
  };

  const res = await invoke({ body: { email: " a@example.com " } });
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { ok: true });
  assert.equal(request.url, "https://api.airtable.com/v0/appTest/tblTest");
  assert.equal(request.options.method, "POST");
  assert.equal(request.options.headers.Authorization, "Bearer test-token");
  assert.deepEqual(JSON.parse(request.options.body), {
    fields: { Name: "", Email: "a@example.com", Message: "" },
  });
  assert.ok(request.options.signal);
});

test("rejects methods and invalid or oversized input before contacting Airtable", async () => {
  configure();
  globalThis.fetch = () => { throw new Error("fetch must not run"); };

  const method = await invoke({ method: "GET" });
  assert.equal(method.statusCode, 405);
  assert.equal(method.headers.Allow, "POST");
  for (const body of [
    "{bad json",
    [],
    { email: "invalid" },
    { email: "a@example.com", name: 1 },
    { email: "a@example.com", name: "x".repeat(201) },
    { email: "a@example.com", message: "x".repeat(10001) },
  ]) {
    assert.equal((await invoke({ body })).statusCode, 400);
  }
  assert.equal((await invoke({ headers: { "content-length": "20000" } })).statusCode, 400);
  assert.equal((await invoke({ body: "x".repeat(20000) })).statusCode, 400);
});

test("missing configuration and upstream failures never report success or reveal details", async () => {
  delete process.env.AIRTABLE_ACCESS_TOKEN;
  delete process.env.AIRTABLE_BASE_ID;
  delete process.env.AIRTABLE_TABLE_ID;
  assert.equal((await invoke()).statusCode, 503);

  configure();
  for (const response of [
    { ok: false, json: async () => ({ error: "secret upstream detail" }) },
    { ok: true, json: async () => ({ id: "wrong-id" }) },
    { ok: true, json: async () => { throw new Error("bad JSON"); } },
  ]) {
    globalThis.fetch = async () => response;
    const res = await invoke();
    assert.equal(res.statusCode, 502);
    assert.equal(JSON.stringify(res.body).includes("secret"), false);
  }
  globalThis.fetch = async () => { throw new Error("secret network detail"); };
  assert.equal((await invoke()).statusCode, 502);
});
