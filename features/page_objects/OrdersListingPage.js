import { expect } from 'chai';
import { each } from 'lodash';
import PageObjectSupport from './PageObjectSupport';
// import DatabaseContext from '../support/DatabaseContext';

const HEADING_SELECTOR = '#root > main > div > div:nth-child(1) > h2';
const NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li > a.orders-nav-link';
const TRANSACTION_TYPE_TABLE_HEADING_SELECTOR = 'table.orders-table > thead > tr > th.orders-table-heading-transaction-type';
const TRANSACTION_TIMESTAMP_TABLE_HEADING_SELECTOR = 'table.orders-table > thead > tr > th.orders-table-heading-transaction-timestamp';
const PRICE_TABLE_HEADING_SELECTOR = 'table.orders-table > thead > tr > th.orders-table-heading-price';
const SHARES_TABLE_HEADING_SELECTOR = 'table.orders-table > thead > tr > th.orders-table-heading-shares';
const TOTAL_AMOUNT_TABLE_HEADING_SELECTOR = 'table.orders-table > thead > tr > th.orders-table-heading-total-amount';

class OrdersListingPage extends PageObjectSupport {
  async clickOrdersNavigationLink() {
    await this.click(NAV_LINK_SELECTOR);
  }

  async verifyPage() {
    await this.verifyHeading();
    await this.verifyOrdersTableHeading();
  }

  async verifyHeading() {
    const value = await this.textContentBySelector(HEADING_SELECTOR);
    expect(value).to.eql('Orders');
  }

  async verifyOrdersTableHeading() {
    const tableHeadingData = [
      { selector: TRANSACTION_TYPE_TABLE_HEADING_SELECTOR, expected: 'Transaction type' },
      { selector: TRANSACTION_TIMESTAMP_TABLE_HEADING_SELECTOR, expected: 'Local date and time' },
      { selector: PRICE_TABLE_HEADING_SELECTOR, expected: 'Price' },
      { selector: SHARES_TABLE_HEADING_SELECTOR, expected: 'Shares' },
      { selector: TOTAL_AMOUNT_TABLE_HEADING_SELECTOR, expected: 'Total amount' },
    ];
    each(tableHeadingData, async (data) => {
      const value = await this.textContentBySelector(data.selector);
      expect(value).to.eql(data.expected);
    });
  }
}

export default OrdersListingPage;
