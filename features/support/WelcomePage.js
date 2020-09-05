import {expect} from "chai";
import * as dotenvConfig from "dotenv/config";

const PAGE = process.env.WEBAPP_URL;
const HEADING_SELECTOR = '#root > main > h1';

export class WelcomePage {

    async openPage(page) {
        await page.goto(PAGE);
        await page.waitForSelector(HEADING_SELECTOR);
    }

    async verifyPage(page) {
        const welcomeHeader = await page.$eval(
            HEADING_SELECTOR,
            el => el.textContent.trim()
        );
        expect(welcomeHeader).to.eql('Welcome page');
    }
}
