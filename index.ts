const puppeteer = require("puppeteer");
const fs = require("fs");

const response = async () => {
  const logo = `                                                                      
   ###    ##     ## ########  #######          ########  ########  ######  ########   #######  ##    ##  ######  ######## 
  ## ##   ##     ##    ##    ##     ##         ##     ## ##       ##    ## ##     ## ##     ## ###   ## ##    ## ##       
 ##   ##  ##     ##    ##    ##     ##         ##     ## ##       ##       ##     ## ##     ## ####  ## ##       ##       
##     ## ##     ##    ##    ##     ## ####### ########  ######    ######  ########  ##     ## ## ## ##  ######  ######   
######### ##     ##    ##    ##     ##         ##   ##   ##             ## ##        ##     ## ##  ####       ## ##       
##     ## ##     ##    ##    ##     ##         ##    ##  ##       ##    ## ##        ##     ## ##   ### ##    ## ##       
##     ##  #######     ##     #######          ##     ## ########  ######  ##         #######  ##    ##  ######  ######## 
  `;

  console.log(logo);
  console.log("Скрипт запущен");
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://hh.ru/", { waitUntil: "domcontentloaded" });

  // await page.waitForNavigation({ waitUntil: "domcontentloaded" });

  await page.waitForSelector(".supernova-button");

  const login_button = await page.evaluate((sel) => {
    let elements = Array.from(document.querySelectorAll(sel));
    let responses = elements.map((element) => {
      return element.innerText;
    });
    return responses;
  }, ".supernova-navi-item.supernova-navi-item_lvl-2.supernova-navi-item_button.supernova-navi-item_no-mobile.supernova-navi-item_dashboard");

  console.log(login_button);

  await browser.close();
};

response();
