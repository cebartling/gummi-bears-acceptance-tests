import { After, Before, Given, Then, When } from "cucumber";

Before(async function(testCase) {
    return await this.openBrowserPage();
});

After(async function() {
    return await this.closeBrowser();
});

Given(/^I am at the welcome page$/, async function() {
    return await this.openWelcomePage();
});

When(/^I navigate to the welcome page$/, async function() {
    return await this.openWelcomePage();
});

When(/^I click the sign in nav link$/, async function() {
    return await this.clickSignInNavLink();
});

Then(/^I should see the welcome page$/, async function() {
    return await this.verifyWelcomePage();
});

Then(/^I should see the authenticated navigation menu$/, async function() {
    return await this.verifyNavigationMenu();
});
