import * as dotenvConfig from "dotenv/config";
import { setWorldConstructor, setDefaultTimeout } from "cucumber";
import puppeteer from "puppeteer";
import {WelcomePage} from "../page_objects/WelcomePage";
import {StocksPage} from "../page_objects/StocksPage";

const WEBAPP_URL = process.env.WEBAPP_URL;
const HEADLESS = process.env.HEADLESS !== 'false';

setDefaultTimeout(30 * 1000);

const welcomePage = new WelcomePage();
const stocksPage = new StocksPage();

class GummiBearsWorld {

  async openBrowserPage() {
    this.browser = await puppeteer.launch({ headless: HEADLESS });
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }

  async openWelcomePage() {
    await welcomePage.openPage(WEBAPP_URL, this.page);
  }

  async verifyWelcomePage() {
    await welcomePage.verifyPage(this.page);
  }

  async clickSignInNavigationLink() {
    await welcomePage.clickSignInNavigationLink(this.page);
  }

  async verifyNavigationMenu() {
    await welcomePage.verifyNavigationMenu(this.page);
  }

  async clickStocksNavigationLink() {
    await stocksPage.clickStocksNavigationLink(this.page);
  }

  async verifyStocksPage() {
    await stocksPage.verifyPage(this.page);
  }
}

setWorldConstructor(GummiBearsWorld);
