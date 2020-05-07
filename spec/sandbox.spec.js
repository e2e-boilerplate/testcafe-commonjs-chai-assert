const { Selector } = require("testcafe");
const { assert } = require("chai");

fixture`Sandbox`.page`https://e2e-boilerplate.github.io/sandbox/`;

test("should be on Sandbox", async () => {
  const title = await Selector("title").innerText;
  const header = await Selector("h1").innerText;

  assert.strictEqual(title, "Sandbox");
  assert.strictEqual(header, "Sandbox");
});
