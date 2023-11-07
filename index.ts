const puppeteer = require("puppeteer");
const fs = require("fs");

const response = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const new_page = await browser.newPage();
    new_page.goto('https://hh.ru/')
}

response();