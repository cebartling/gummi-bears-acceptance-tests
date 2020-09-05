import { After, Before, Given, Then, When } from "cucumber";

Before(async function(testCase) {
    return await this.openBrowserPage();
});

After(async function() {
    return await this.closeBrowser();
});

When(/^I navigate to the welcome page$/, async function() {
    return await this.openWelcomePage();
});

Then(/^I should see the welcome page$/, async function() {
    return await this.verifyWelcomePage();
});
