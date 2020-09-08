import { expect } from 'chai';

const HEADING_SELECTOR = '#root > main > h1';
const SIGN_IN_LINK_SELECTOR = '#navbarCollapse > ul:nth-child(2) > li > a';
const DASHBOARD_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(1) > a';
const STOCKS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(2) > a';
const TRANSACTIONS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(3) > a';

class WelcomePage {
  async openPage(world) {
    await world.page.goto(world.url);
    await world.page.waitForSelector(HEADING_SELECTOR);
  }

  async verifyPage(world) {
    const welcomeHeader = await world.page.$eval(
      HEADING_SELECTOR,
      (el) => el.textContent.trim(),
    );
    expect(welcomeHeader).to.eql('Welcome page');
  }

  async clickSignInNavigationLink(world) {
    await world.page.waitForSelector(SIGN_IN_LINK_SELECTOR);
    await world.page.click(SIGN_IN_LINK_SELECTOR);
  }

  async verifyNavigationMenu(world) {
    const dashboardNavLink = await world.page.$eval(
      DASHBOARD_NAV_LINK_SELECTOR,
      (el) => el.textContent.trim(),
    );
    expect(dashboardNavLink).to.eql('Dashboard');
    const stocksNavLink = await world.page.$eval(
      STOCKS_NAV_LINK_SELECTOR,
      (el) => el.textContent.trim(),
    );
    expect(stocksNavLink).to.eql('Stocks');
    const transactionsNavLink = await world.page.$eval(
      TRANSACTIONS_NAV_LINK_SELECTOR,
      (el) => el.textContent.trim(),
    );
    expect(transactionsNavLink).to.eql('Transactions');
  }
}

export default new WelcomePage();
