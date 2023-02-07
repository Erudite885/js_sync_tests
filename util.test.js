const { generateText } = require("./util");

test("should output name and age", () => {
  const text = generateText("Nat", 29);
  expect(text).toBe("Nat (29 years old)");
});

test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});
