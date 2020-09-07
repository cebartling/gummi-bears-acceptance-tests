import {setWorldConstructor, setDefaultTimeout} from "cucumber";
import puppeteer, {Browser, Page} from "puppeteer";
// @ts-ignore
import * as dotenvConfig from "dotenv/config";

const WEBAPP_URL = process.env.WEBAPP_URL;
const HEADLESS = process.env.HEADLESS !== 'false';

setDefaultTimeout(30 * 1000);

class GummiBearsWorld {
  private url: string | undefined;
  private browser: Browser | undefined;
  private page: Page | undefined;

  public async openBrowserPage() {
    this.url = WEBAPP_URL;
    this.browser = await puppeteer.launch({headless: HEADLESS});
    this.page = await this.browser.newPage();
  }

  public async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(GummiBearsWorld);
