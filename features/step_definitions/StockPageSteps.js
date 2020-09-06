import {Then, When} from "cucumber";


When(/^I click the stocks nav link$/, async function() {
    return await this.clickStocksNavigationLink();
});

Then(/^I should see the stocks page$/, async function() {
    return await this.verifyStocksPage();
});

