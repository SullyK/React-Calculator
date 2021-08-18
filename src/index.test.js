import puppeteer from "puppeteer";

test("Basic Addition: 5 + 5 = 25", async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("25");
});

test("Basic Addition 0 + 0 = 0", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/React-Calculator");

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(16)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(16)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("0");
});

test("Basic Addition: 0 + 1 = 1", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/React-Calculator");

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(16)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(16)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("1");
});

test("Basic Addition: 55 + 103 = 158", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/React-Calculator");

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(16)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(16)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("158");
});

test("Basic Addition : 12.5 + 4 = 16.5", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/React-Calculator");

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(14)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(14)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(16)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(16)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(9)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(9)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("16.5");
});

test("Basic Addition: 6.3 + 2204.6 = 2210.9", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/React-Calculator");

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(11)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(11)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(16)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(16)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(14)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(14)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(14)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(14)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(9)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(9)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(11)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(11)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("2210.9");
});

test("Basic Subtraction: 13 - 8 = 5", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(12)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(12)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(6)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(6)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("5");
});
test("Basic Subtraction: 0 - 0 = 0", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(12)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(12)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("0");
});

test("Basic Subtraction: 2 - 4 = -2", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(14)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(14)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(12)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(12)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(9)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(9)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("-2");
});

test("Basic Subtraction: 8.5 - 300", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(6)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(6)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(12)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(12)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("-291.5");
});

test("Basic Subtraction: 10.5 - 5.3 = 5.2", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(12)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(12)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("5.2");
});

//Multiplication tests

// 1 x 0 = 0 - done
// 0 x 1 = 0 - done
// 15.5 x 0 = 0 - done
// 1 x 1 = 1 - done
// 3 x 4 = 12 - done
// 6 x 5 = 30 - done
// 50 x 50 =  2500

test("Multiplication: 1 x 0 = 0", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.setViewport({ width: 767, height: 748 });

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("0");
});

test("Multiplication: 0 x 1 = 0", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.setViewport({ width: 767, height: 748 });

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("0");
});

test("Multiplication: 15.5 x 0 = 0", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.setViewport({ width: 767, height: 748 });

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(18)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("0");
});

test("Multiplication: 1 x 1 = 1", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.setViewport({ width: 767, height: 748 });

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("1");
});

test("Multiplication: 3 x 4 = 12", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.setViewport({ width: 1536, height: 758 });

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(9)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(9)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("12");
});

test("Multiplication: 6 x 5 = 30", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(11)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(11)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("30");
});

test("Multiplication: 50 x 50 = 2500", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.setViewport({ width: 1536, height: 758 });

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(8)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(10)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("2500");
});

//Divison tests:
// 1 / 0 = Infinity - done
// 1 / 1 = 1 - done
// 0 / 2000 = 0 - done
// 1 / 2 = 0.5 - done
// 33 / 3 = 11 - done
// 100 / 10 = 10

test("Basic Divison: 1 / 0 = Infinity", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.setViewport({ width: 1536, height: 758 });

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(4)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(4)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("Infinity");
});

test("Basic Divison: 1 / 1 = 1", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.setViewport({ width: 1178, height: 758 });

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(4)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(4)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("1");
});

test("Basic Divison: 0 / 2000 = 0", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.setViewport({ width: 1178, height: 758 });

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(4)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(4)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(14)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(14)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("0");
});

test("Basic Divison: 1 / 2 = 0.5", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.setViewport({ width: 1178, height: 758 });

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(4)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(4)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(14)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(14)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("0.5");
});

test("Basic Divison: 33 / 11 = 3", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.setViewport({ width: 1178, height: 758 });

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(15)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(4)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(4)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("11");
});

test("Basic Divison: 100 / 10 = 10", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  await page.setViewport({ width: 1178, height: 758 });

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(4)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(4)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-number:nth-child(13)"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-zero"
  );

  await page.waitForSelector(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );
  await page.click(
    ".center-all > div > .calc-skeleton > .num-pad > .clickable-key-operator:nth-child(19)"
  );

  let value = await page.$(".results-text");
  const finalResult = await page.evaluate((value) => value.textContent, value);
  await browser.close();
  expect(finalResult).toBe("10");
});
