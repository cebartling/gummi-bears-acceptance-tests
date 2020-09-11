import * as dotenvConfig from 'dotenv/config'; // eslint-disable-line no-unused-vars

import { setWorldConstructor, setDefaultTimeout } from 'cucumber';
import puppeteer from 'puppeteer';

const { WEBAPP_URL, HEADLESS } = process.env;
const isHeadless = HEADLESS !== 'false';

const defaultTimeout = 30 * 1000;
setDefaultTimeout(defaultTimeout);

class GummiBearsWorld {
  async openBrowserPage() {
    this.url = WEBAPP_URL;
    this.browser = await puppeteer.launch({ headless: isHeadless });
    this.page = await this.browser.newPage();
    this.page.setDefaultTimeout(defaultTimeout);
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(GummiBearsWorld);
