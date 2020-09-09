import { expect } from 'chai';

const HEADING_SELECTOR = '#root > main > div > div:nth-child(1) > h2';
const STOCKS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(2) > a';

class StocksPage {
  constructor(world) {
    this.world = world;
  }

  async clickStocksNavigationLink() {
    await this.world.page.waitForSelector(STOCKS_NAV_LINK_SELECTOR);
    await this.world.page.click(STOCKS_NAV_LINK_SELECTOR);
  }

  async verifyPage() {
    await this.world.page.waitForSelector(HEADING_SELECTOR);
    const pageHeader = await this.world.page.$eval(
      HEADING_SELECTOR,
      (el) => el.textContent.trim(),
    );
    expect(pageHeader).to.eql('Stocks');
    // const count = await DatabaseContext.stockModel.count({});
  }
}

export default StocksPage;
