import * as dotenvConfig from "dotenv/config";
import {setWorldConstructor, setDefaultTimeout} from "cucumber";
import puppeteer from "puppeteer";

const WEBAPP_URL = process.env.WEBAPP_URL;
const HEADLESS = process.env.HEADLESS !== 'false';

setDefaultTimeout(30 * 1000);

class GummiBearsWorld {
  async openBrowserPage() {
    this.url = WEBAPP_URL;
    this.browser = await puppeteer.launch({headless: HEADLESS});
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(GummiBearsWorld);
