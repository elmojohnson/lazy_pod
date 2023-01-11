const puppeteer = require("puppeteer");

const scraper = async (url, txtReplace) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const phones = await page.$$eval(".makers ul li", (elements) =>
    elements.map((e) => (e.querySelector("a strong span").innerText))
  );

  await browser.close();
  return phones.map(el => el.replace(txtReplace, ""));
};

module.exports = scraper;
