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

  //Входим в аккаунт

  await page.goto(
    "https://perm.hh.ru/account/login?backurl=%2Fsearch%2Fvacancy%3Ftext%3Dreact%26area%3D72&hhtmFrom=vacancy_search_list",
    { waitUntil: "domcontentloaded" }
  );

  // await browser.close();
};

response();
