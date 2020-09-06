import * as dotenvConfig from "dotenv/config";
import {setWorldConstructor, setDefaultTimeout} from "cucumber";
import puppeteer from "puppeteer";
import Sequelize from "sequelize";

const DATABASE = process.env.DATABASE;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOSTNAME = process.env.DB_HOSTNAME;
const WEBAPP_URL = process.env.WEBAPP_URL;
const HEADLESS = process.env.HEADLESS !== 'false';

setDefaultTimeout(30 * 1000);

class GummiBearsWorld {

  async openDatabaseConnection() {
    this.sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:5432/${DATABASE}`, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      logging: false,
    });
    try {
      await this.sequelize.authenticate();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  async closeDatabaseConnection() {
    if (this.sequelize) {
      try {
        await this.sequelize.close();
      } catch (error) {
        console.error('Unable to disconnect from the database:', error);
      }
    }
  }

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
