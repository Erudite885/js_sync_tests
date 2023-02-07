const { generateText } = require("./util");

test("should output name and age", () => {
  const text = generateText("Nat", 29);
  expect(text).toBe("Nat (29 years old)");
  const text2 = generateText("Anna", 29);
  expect(text2).toBe("Anna (19 years old)");
});

test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
  const text2 = generateText();
  expect(text2).toBe("undefined (undefined years old)");
});

test("should generate a valid text output", () => {
  const text = generateText("Nat", 29);
  expect(text).toBe("Nat (29 years old)");
});
