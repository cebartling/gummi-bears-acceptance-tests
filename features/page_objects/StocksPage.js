import { expect } from 'chai';
import { each, find } from 'lodash';
import PageObjectSupport from './PageObjectSupport';
import DatabaseContext from '../support/DatabaseContext';

const HEADING_SELECTOR = '#root > main > div > div:nth-child(1) > h2';
const STOCKS_NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li:nth-child(2) > a';
const TABLE_ROWS_SELECTOR = '#root > main > div > div:nth-child(3) > table > tbody > tr';

class StocksPage extends PageObjectSupport {
  async clickStocksNavigationLink() {
    await this.click(STOCKS_NAV_LINK_SELECTOR);
  }

  async verifyPage() {
    const value = await this.textContentBySelector(HEADING_SELECTOR);
    expect(value).to.eql('Stocks');
    const stocks = await DatabaseContext.stockModel.findAll({ attributes: ['id', 'name', 'symbol'] });
    const tableRows = await this.elementsBySelector(TABLE_ROWS_SELECTOR);
    each(tableRows, async (tableRow) => {
      const companyName = await tableRow.$eval('td.stock-table-cell-name', (el) => el.textContent.trim());
      expect(find(stocks, (stock) => stock.name === companyName)).not.to.be.undefined;
    });
  }
}

export default StocksPage;
