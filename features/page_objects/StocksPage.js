import {expect} from "chai";

const HEADING_SELECTOR = '#root > main > div > div:nth-child(1) > h2';
const STOCKS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(2) > a';

class StocksPage {

    async clickStocksNavigationLink(page) {
        await page.waitForSelector(STOCKS_NAV_LINK_SELECTOR);
        await page.click(STOCKS_NAV_LINK_SELECTOR);
    }

    async verifyPage(page) {
        await page.waitForSelector(HEADING_SELECTOR);
        const pageHeader = await page.$eval(
            HEADING_SELECTOR,
            el => el.textContent.trim()
        );
        expect(pageHeader).to.eql('Stocks');
    }
}

export default new StocksPage();
