import { expect } from 'chai';
import PageObjectSupport from './PageObjectSupport';

const HEADING_SELECTOR = '#root > main > div > div:nth-child(1) > h2';
const STOCKS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(2) > a';

class StocksPage extends PageObjectSupport {
  async clickStocksNavigationLink() {
    await this.click(STOCKS_NAV_LINK_SELECTOR);
  }

  async verifyPage() {
    const value = await this.textContentBySelector(HEADING_SELECTOR);
    expect(value).to.eql('Stocks');
    // const stocks = await DatabaseContext.stockModel.findAll({ attributes: ['name'] });
  }
}

export default StocksPage;
