const puppeteer = require("puppeteer");
const fs = require("fs");

const response = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.goto("https://hh.ru/");
  await page.waitForSelector(".supernova-button"); // Супер важно

  //TODO: Имеем две кнопки с одинаковыми классами, забирает первую, нужно забрать вторую

  const login_button = await page.evaluate(() => {
    const button = document.querySelector(
      ".supernova-navi-item.supernova-navi-item_lvl-2.supernova-navi-item_button.supernova-navi-item_no-mobile.supernova-navi-item_dashboard"
    );
    return button ? button.textContent : null;
  });

  console.log(login_button);

  await browser.close();
};

response();
