import {Given, Then, When} from "cucumber";
import WelcomePage from "../page_objects/WelcomePage";

Given(/^I am at the welcome page$/, async function() {
    return await WelcomePage.openPage(this.url, this.page);
});

Given(/^I am signed in at the welcome page$/, async function() {
    await WelcomePage.openPage(this.url, this.page);
    await WelcomePage.clickSignInNavigationLink(this.page);
    await WelcomePage.verifyPage(this.page);
    return await WelcomePage.verifyNavigationMenu(this.page);
});

When(/^I navigate to the welcome page$/, async function() {
    return await WelcomePage.openPage(this.url, this.page);
});

When(/^I click the sign in nav link$/, async function() {
    return await WelcomePage.clickSignInNavigationLink(this.page);
});

Then(/^I should see the welcome page$/, async function() {
    return await WelcomePage.verifyPage(this.page);
});

Then(/^I should see the authenticated navigation menu$/, async function() {
    return await WelcomePage.verifyNavigationMenu(this.page);
});
