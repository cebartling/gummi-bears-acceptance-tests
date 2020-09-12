/* eslint-disable func-names */
import { Then, When } from 'cucumber';
import StocksListingPage from '../page_objects/StocksListingPage';

When(/^I click the stocks nav link$/, async () => {
  const stocksPage = new StocksListingPage();
  await stocksPage.clickStocksNavigationLink();
});

Then(/^I should see the stocks page$/, async () => {
  const stocksPage = new StocksListingPage();
  await stocksPage.verifyPage();
});
