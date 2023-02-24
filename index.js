import puppeteer from "puppeteer";
import { Clicker } from "./functions/Clicker.js";
import { Typer } from "./functions/Typer.js";
import { AddAddress } from "./tests/AddAddress.js";
import { Login } from "./tests/Login.js";
import { MobileMode } from "./ViewMode/MobileMode.js";
import { TabletMode } from "./ViewMode/TabletMode.js";


import path from 'path'
import { fileURLToPath } from 'url';
import { unless } from 'express-unless'
import express from "express";
import cors from "cors";
import { FullScreenMode } from "./ViewMode/FullScreenMode.js";
const app = express()
const port = 7000
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);




let page = null
const initTest = (req, res, next) => {
  openBrowser().then(
    ss => next()
  );
}
initTest.unless = unless;
const openBrowser = async () => {
  const browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
}

app.use(cors());
app.use(initTest.unless({ path: ['/'] }));
// (async () => {
//   // Set screen size

// })();



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'view', 'index.html'))
})

app.get('/test', async (req, res) => {
  return res.json({
    status: false,
    message: 'wellcome to test'
  })
})
app.get('/tablet-test', async (req, res) => {
  try {
    await TabletMode(page)
    await Login(page, Clicker, Typer);
    await AddAddress(page, Clicker, Typer);
    
    return res.json({
      status: true,
      message: 'test passed'
    })
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: 'test faild',
      error
    })
  }
})

app.get('/fullscreen-test', async (req, res) => {
  try {
    await FullScreenMode(page)
    await Login(page, Clicker, Typer);
    await AddAddress(page, Clicker, Typer);
    return res.json({
      status: true,
      message: 'test passed'
    })
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: 'test faild'
    })
  }
})


app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))
