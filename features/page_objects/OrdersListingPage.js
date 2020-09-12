import { expect } from 'chai';
// import { each } from 'lodash';
import PageObjectSupport from './PageObjectSupport';
// import DatabaseContext from '../support/DatabaseContext';

const HEADING_SELECTOR = '#root > main > div > div:nth-child(1) > h2';
const NAV_LINK_SELECTOR = '#navbarCollapse > ul.navbar-nav.mr-auto > li > a.orders-nav-link';

// const TABLE_ROWS_SELECTOR = '#root > main > div > div:nth-child(3) > table > tbody > tr';

class OrdersListingPage extends PageObjectSupport {
  async clickOrdersNavigationLink() {
    await this.click(NAV_LINK_SELECTOR);
  }

  async verifyPage() {
    const value = await this.textContentBySelector(HEADING_SELECTOR);
    expect(value).to.eql('Orders');
    // const tableRows = await this.elementsBySelector(TABLE_ROWS_SELECTOR);
    // each(tableRows, async (tableRow) => {
    //   const companyName = await tableRow.$eval('td.order-table-cell-name', (el) => el.textContent.trim());
    //   const found = await DatabaseContext.orderModel.findOne({
    //     where: {
    //       name: companyName,
    //     },
    //   });
    //   expect(found).not.to.be.undefined;
    // });
  }
}

export default OrdersListingPage;
