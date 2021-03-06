import { expect, should } from 'chai';
import { each } from 'lodash';
import PageObjectSupport from './PageObjectSupport';
import DatabaseContext from '../support/DatabaseContext';
// import DatabaseContext from '../support/DatabaseContext';

const HEADING_SELECTOR = '#root > main > div > div:nth-child(1) > h2';
const NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li > a.orders-nav-link';
const TRANSACTION_TYPE_TABLE_HEADING_SELECTOR = 'table.orders-table > thead > tr > th.orders-table-heading-transaction-type';
const TRANSACTION_TIMESTAMP_TABLE_HEADING_SELECTOR = 'table.orders-table > thead > tr > th.orders-table-heading-transaction-timestamp';
const PRICE_TABLE_HEADING_SELECTOR = 'table.orders-table > thead > tr > th.orders-table-heading-price';
const SHARES_TABLE_HEADING_SELECTOR = 'table.orders-table > thead > tr > th.orders-table-heading-shares';
const TOTAL_AMOUNT_TABLE_HEADING_SELECTOR = 'table.orders-table > thead > tr > th.orders-table-heading-total-amount';

const ORDERS_TABLE_ROW_SELECTOR = 'table.orders-table > tbody > tr';
const TRANSACTION_TYPE_TABLE_CELL_SELECTOR = 'table.orders-table > tbody > tr > td.orders-table-transaction-type';
// const TRANSACTION_TIMESTAMP_TABLE_CELL_SELECTOR = 'table.orders-table > tbody > tr > td.orders-table-transaction-timestamp';
// const PRICE_TABLE_CELL_SELECTOR = 'table.orders-table > tbody > tr > td.orders-table-price';
// const SHARES_TABLE_CELL_SELECTOR = 'table.orders-table > tbody > tr > td.orders-table-shares';
// const TOTAL_AMOUNT_TABLE_CELL_SELECTOR = 'table.orders-table > tbody > tr > td.orders-table-total-amount';

class OrdersListingPage extends PageObjectSupport {
  async clickOrdersNavigationLink() {
    await this.click(NAV_LINK_SELECTOR);
  }

  async verifyPage() {
    await this.verifyHeading();
    await this.verifyOrdersTableHeading();
    await this.verifyOrdersTableContent();
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

  async verifyOrdersTableContent() {
    const orderRows = await this.elementsBySelector(ORDERS_TABLE_ROW_SELECTOR);
    each(orderRows, async (orderRowEl) => {
      const orderId = await orderRowEl.getAttribute('data-order-id');
      const found = await DatabaseContext.orderModel.findOne({
        where: {
          id: orderId,
        },
      });
      const value = await this.textContentBySelector(TRANSACTION_TYPE_TABLE_CELL_SELECTOR);
      expect(value).to.eql(found.priceInCents);
    });
  }
}

export default OrdersListingPage;
