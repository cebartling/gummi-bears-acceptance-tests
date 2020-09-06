import {expect} from "chai";

const HEADING_SELECTOR = '#root > main > h1';
const SIGN_IN_LINK_SELECTOR = '#navbarCollapse > ul:nth-child(2) > li > a';
const DASHBOARD_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(1) > a';
const STOCKS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(2) > a';
const TRANSACTIONS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(3) > a';

class WelcomePage {

    async openPage(url, page) {
        await page.goto(url);
        await page.waitForSelector(HEADING_SELECTOR);
    }

    async verifyPage(page) {
        const welcomeHeader = await page.$eval(
            HEADING_SELECTOR,
            el => el.textContent.trim()
        );
        expect(welcomeHeader).to.eql('Welcome page');
    }

    async clickSignInNavigationLink(page) {
        await page.waitForSelector(SIGN_IN_LINK_SELECTOR);
        await page.click(SIGN_IN_LINK_SELECTOR);
    }

    async verifyNavigationMenu(page) {
        const dashboardNavLink = await page.$eval(
            DASHBOARD_NAV_LINK_SELECTOR,
            el => el.textContent.trim()
        );
        expect(dashboardNavLink).to.eql('Dashboard');
        const stocksNavLink = await page.$eval(
            STOCKS_NAV_LINK_SELECTOR,
            el => el.textContent.trim()
        );
        expect(stocksNavLink).to.eql('Stocks');
        const transactionsNavLink = await page.$eval(
            TRANSACTIONS_NAV_LINK_SELECTOR,
            el => el.textContent.trim()
        );
        expect(transactionsNavLink).to.eql('Transactions');
    }
}

export default new WelcomePage();
