const { generateText } = require("./util");

test("should output name and age", () => {
  const text = generateText("Nat", 29);
  expect(text).toBe("Nat (29 years old)");
});
