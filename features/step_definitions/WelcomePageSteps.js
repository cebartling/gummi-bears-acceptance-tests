import {Given, Then, When} from "cucumber";
import WelcomePage from "../page_objects/WelcomePage";

Given(/^I am at the welcome page$/, async function() {
    return await WelcomePage.openPage(this);
});

Given(/^I am signed in at the welcome page$/, async function() {
    await WelcomePage.openPage(this);
    await WelcomePage.clickSignInNavigationLink(this);
    await WelcomePage.verifyPage(this);
    return await WelcomePage.verifyNavigationMenu(this);
});

When(/^I navigate to the welcome page$/, async function() {
    return await WelcomePage.openPage(this);
});

When(/^I click the sign in nav link$/, async function() {
    return await WelcomePage.clickSignInNavigationLink(this);
});

Then(/^I should see the welcome page$/, async function() {
    return await WelcomePage.verifyPage(this);
});

Then(/^I should see the authenticated navigation menu$/, async function() {
    return await WelcomePage.verifyNavigationMenu(this);
});
