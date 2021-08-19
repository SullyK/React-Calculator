import puppeteer from "puppeteer";
jest.setTimeout("20000");
test("Basic Working calculations", async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");

  // 5 + 5 = 25
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
  let finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("25");
  page.reload();

  // 0 + 0 = 0

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("0");

  page.reload();
  // 0 + 1 = 1
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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("1");
  //55 + 103 = 158
  page.reload();

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("158");

  //12.5 + 4 = 16.5
  page.reload();

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("16.5");

  page.reload();
  //6.3 + 2204.6 = 2210.9

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("2210.9");

  page.reload();
  //13 - 8 = 5

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("5");

  page.reload();
  //0 - 0 = 0

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("0");

  page.reload();
  //2 - 4 = -2

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("-2");

  page.reload();

  // 8.5 - 300 = 291.5

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
  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("-291.5");

  page.reload();
  //10.5 - 5.3 = 5.2
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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("5.2");

  //Multiplication tests

  // 1 x 0 = 0 - done
  // 0 x 1 = 0 - done
  // 15.5 x 0 = 0 - done
  // 1 x 1 = 1 - done
  // 3 x 4 = 12 - done
  // 6 x 5 = 30 - done
  // 50 x 50 =  2500

  page.reload();
  //1 x 0 = 0

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("0");

  page.reload();

  // 0 x 1 = 0
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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("0");

  page.reload();

  //15.5 x 0 = 0

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("0");

  page.reload();
  //1 x 1 = 1

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("1");

  page.reload();
  // 3 x 4 = 12

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("12");

  page.reload();
  // 6 x 5 = 30

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("30");
  page.reload();
  // 50 x 50 = 2500

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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("2500");

  //Divison tests:
  // 1 / 0 = Infinity - done
  // 1 / 1 = 1 - done
  // 0 / 2000 = 0 - done
  // 1 / 2 = 0.5 - done
  // 33 / 3 = 11 - done
  // 100 / 10 = 10

  page.reload();

  //100 / 10 = 10
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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("10");

  page.reload();

  // 33 / 3 = 11
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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("3");

  page.reload();

  // 1 / 2 = 0.5
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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("0.5");

  page.reload();
  // 0 / 2000 = 0
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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("0");

  page.reload();
  // 1 / 1 = 1
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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("1");

  page.reload();

  // 1 / 0 = Infinity
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

  value = await page.$(".results-text");
  finalResult = await page.evaluate((value) => value.textContent, value);
  expect(finalResult).toBe("Infinity");
});
//Divison tests:
// 1 / 0 = Infinity - done
// 1 / 1 = 1 - done
// 0 / 2000 = 0 - done
// 1 / 2 = 0.5 - done
// 33 / 3 = 11 - done
// 100 / 10 = 10

//Basic tests completes
