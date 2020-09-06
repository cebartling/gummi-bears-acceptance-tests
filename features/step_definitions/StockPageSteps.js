import {Then, When} from "cucumber";
import StocksPage from "../page_objects/StocksPage";

When(/^I click the stocks nav link$/, async function() {
    return await StocksPage.clickStocksNavigationLink(this);
});

Then(/^I should see the stocks page$/, async function() {
    return await StocksPage.verifyPage(this);
});

