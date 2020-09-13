import * as dotenvConfig from 'dotenv/config'; // eslint-disable-line no-unused-vars

import playwright, { devices } from 'playwright';

const {
  WEBAPP_URL,
  HEADLESS,
  PLAYWRIGHT_BROWSER_TYPE,
  PLAYWRIGHT_DEVICE,
} = process.env;
const isHeadless = HEADLESS !== 'false';

const defaultTimeout = 30 * 1000;

class PlaywrightContext {
  constructor() {
    this.url = WEBAPP_URL;
  }

  async launchBrowser() {
    this.browser = await playwright[PLAYWRIGHT_BROWSER_TYPE].launch({ headless: isHeadless });
  }

  async createContext() {
    if (!this.browser) {
      throw new Error('Browser does not exist in the playright context.');
    }
    const device = devices[PLAYWRIGHT_DEVICE];
    this.context = await this.browser.newContext({
      viewport: device.viewport,
      userAgent: device.userAgent,
      // logger: {
      //   isEnabled: (name, severity) => name === 'browser',
      //   log: (name, severity, message, args) => console.log(`${name} ${message}`),
      // },
    });
  }

  async createPage() {
    if (!this.context) {
      throw new Error('Browser context does not exist in the playright context.');
    }
    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(defaultTimeout);
  }

  async closePage() {
    if (!this.page) {
      throw new Error('Existing page does not exist in the playright context.');
    }
    await this.page.close();
  }

  async closeContext() {
    if (!this.context) {
      throw new Error('Existing browser context does not exist in the playright context.');
    }
    await this.context.close();
  }

  async closeBrowser() {
    if (!this.browser) {
      throw new Error('Browser does not exist in the playright context.');
    }
    await this.browser.close();
  }
}

export default new PlaywrightContext();
