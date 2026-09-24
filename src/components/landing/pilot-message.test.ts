import assert from "node:assert/strict";
import { test } from "node:test";
import { buildPilotMessage } from "./pilot-message";

test("preserves audience without adding a blank optional note", () => {
  assert.equal(buildPilotMessage("Myself", "  "), "Who is this for: Myself");
});

test("adds the loved-one audience and optional note exactly once", () => {
  assert.equal(buildPilotMessage("A loved one", "  We live nearby.  "), "Who is this for: A loved one\n\nWe live nearby.");
});
