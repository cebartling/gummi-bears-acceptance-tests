import { Then, When } from 'cucumber';
import StocksPage from '../page_objects/StocksPage';

When(/^I click the stocks nav link$/, async function () {
  const stocksPage = new StocksPage(this);
  await stocksPage.clickStocksNavigationLink();
});

Then(/^I should see the stocks page$/, async function () {
  const stocksPage = new StocksPage(this);
  await stocksPage.verifyPage();
});
