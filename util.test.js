const puppeteer = require("puppeteer");

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

test("should click around", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("localhost:3000");
  await page.click("input#name");
  await page.type("input#name", "Anne");
  await page.click("input#age");
  await page.type("input#age", "26");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Anne (26 years old)");
}, 10000);
