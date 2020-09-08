import { expect } from 'chai';

const HEADING_SELECTOR = '#root > main > h1';
const SIGN_IN_LINK_SELECTOR = '#navbarCollapse > ul:nth-child(2) > li > a';
const DASHBOARD_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(1) > a';
const STOCKS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(2) > a';
const TRANSACTIONS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(3) > a';

class WelcomePage {
  constructor(world) {
    this.world = world;
  }

  async openPage() {
    await this.world.page.goto(this.world.url);
    await this.world.page.waitForSelector(HEADING_SELECTOR);
  }

  async verifyPage() {
    const welcomeHeader = await this.world.page.$eval(
      HEADING_SELECTOR,
      (el) => el.textContent.trim(),
    );
    expect(welcomeHeader).to.eql('Welcome page');
  }

  async clickSignInNavigationLink() {
    await this.world.page.waitForSelector(SIGN_IN_LINK_SELECTOR);
    await this.world.page.click(SIGN_IN_LINK_SELECTOR);
  }

  async verifyNavigationMenu() {
    const dashboardNavLink = await this.world.page.$eval(
      DASHBOARD_NAV_LINK_SELECTOR,
      (el) => el.textContent.trim(),
    );
    expect(dashboardNavLink).to.eql('Dashboard');
    const stocksNavLink = await this.world.page.$eval(
      STOCKS_NAV_LINK_SELECTOR,
      (el) => el.textContent.trim(),
    );
    expect(stocksNavLink).to.eql('Stocks');
    const transactionsNavLink = await this.world.page.$eval(
      TRANSACTIONS_NAV_LINK_SELECTOR,
      (el) => el.textContent.trim(),
    );
    expect(transactionsNavLink).to.eql('Transactions');
  }
}

export default WelcomePage;
