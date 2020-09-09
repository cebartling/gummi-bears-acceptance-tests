import { expect } from 'chai';
import { each } from 'lodash';
import PageObjectSupport from './PageObjectSupport';
import DatabaseContext from '../support/DatabaseContext';

const HEADING_SELECTOR = '#root > main > div > div:nth-child(1) > h2';
const STOCKS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(2) > a';

class StocksPage extends PageObjectSupport {
  async clickStocksNavigationLink() {
    await this.world.page.waitForSelector(STOCKS_NAV_LINK_SELECTOR);
    await this.world.page.click(STOCKS_NAV_LINK_SELECTOR);
  }

  async verifyPage() {
    const value = await this.textContentBySelector(HEADING_SELECTOR);
    expect(value).to.eql('Stocks');
    const stocks = await DatabaseContext.stockModel.findAll({ attributes: ['name'] });
    each(stocks, async (stock) => {
      console.log(stock.name);
      // const found = await this.findHyperlinkByContainsText(stock.name);
      // expect(found.length).to.eql(1);
    });
  }
}

export default StocksPage;
