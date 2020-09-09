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
    // const stocks = await DatabaseContext.stockModel.findAll({ attributes: ['id', 'name', 'symbol'] });
    const tableRows = await this.elementsBySelector(TABLE_ROWS_SELECTOR);
    each(tableRows, async (tableRow) => {
      const fields = await tableRow.$$('td');
      console.log(fields[0]);
      // const hyperlinkText = await fields[0].$eval('a', (el) => el.textContent.trim());
      // console.log(hyperlinkText);
      // const foundByName = find(stocks, (stock) => stock.name === hyperlinkText);
      // expect(foundByName).to.not.be.undefined;
    });
  }
}

export default StocksPage;
