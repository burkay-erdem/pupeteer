import puppeteer from "puppeteer";
import { Clicker } from "./functions/Clicker.js";
import { Typer } from "./functions/Typer.js";
import { AddAddress } from "./tests/AddAddress.js";
import { Login } from "./tests/Login.js";
import { MobileMode } from "./ViewMode/MobileMode.js";
import { TabletMode } from "./ViewMode/TabletMode.js";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://elonky.com/");

  // Set screen size
  await TabletMode(page)
  await Login(page,Clicker,Typer);  
  await AddAddress(page,Clicker,Typer);

  
})();
