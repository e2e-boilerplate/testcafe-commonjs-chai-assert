const { Selector } = require("testcafe");
const { assert } = require("chai");

fixture`Sandbox`.page`https://www.google.com`;

test("should be on Google", async () => {
  const title = await Selector("title").innerText;

  assert.strictEqual(title, "Google");
});
