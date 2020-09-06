import {Given, Then, When} from "cucumber";

Given(/^I am at the welcome page$/, async function() {
    return await this.openWelcomePage();
});

Given(/^I am signed in at the welcome page$/, async function() {
    await this.openWelcomePage();
    await this.clickSignInNavigationLink();
    await this.verifyWelcomePage();
    return await this.verifyNavigationMenu();
});

When(/^I navigate to the welcome page$/, async function() {
    return await this.openWelcomePage();
});

When(/^I click the sign in nav link$/, async function() {
    return await this.clickSignInNavigationLink();
});

Then(/^I should see the welcome page$/, async function() {
    return await this.verifyWelcomePage();
});

Then(/^I should see the authenticated navigation menu$/, async function() {
    return await this.verifyNavigationMenu();
});
