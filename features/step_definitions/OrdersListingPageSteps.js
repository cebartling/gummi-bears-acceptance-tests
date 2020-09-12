/* eslint-disable func-names */
import { Then, When } from 'cucumber';
import OrdersListingPage from '../page_objects/OrdersListingPage';

When(/^I click the orders nav link$/, async () => {
  const ordersPage = new OrdersListingPage();
  await ordersPage.clickOrdersNavigationLink();
});

Then(/^I should see the orders page$/, async () => {
  const ordersPage = new OrdersListingPage();
  await ordersPage.verifyPage();
});
