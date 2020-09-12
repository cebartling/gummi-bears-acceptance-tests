import { expect } from 'chai';
import PlaywrightContext from '../support/PlaywrightContext';
import PageObjectSupport from './PageObjectSupport';

const HEADING_SELECTOR = '#root > main > h1';
const SIGN_IN_LINK_SELECTOR = '#navbarCollapse > ul:nth-child(2) > li > a';
const DASHBOARD_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(1) > a';
const STOCKS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(2) > a';
const TRANSACTIONS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(3) > a';

class WelcomePage extends PageObjectSupport {
  async openPage() {
    await PlaywrightContext.page.goto(PlaywrightContext.url);
    await PlaywrightContext.page.waitForSelector(HEADING_SELECTOR);
  }

  async verifyPage() {
    const value = await this.textContentBySelector(HEADING_SELECTOR);
    expect(value).to.eql('Welcome page');
  }

  async clickSignInNavigationLink() {
    await this.click(SIGN_IN_LINK_SELECTOR);
  }

  async verifyNavigationMenu() {
    const dashboardNavLink = await this.textContentBySelector(DASHBOARD_NAV_LINK_SELECTOR);
    expect(dashboardNavLink).to.eql('Dashboard');
    const stocksNavLink = await this.textContentBySelector(STOCKS_NAV_LINK_SELECTOR);
    expect(stocksNavLink).to.eql('Stocks');
    const transactionsNavLink = await this.textContentBySelector(TRANSACTIONS_NAV_LINK_SELECTOR);
    expect(transactionsNavLink).to.eql('Transactions');
  }
}

export default WelcomePage;
