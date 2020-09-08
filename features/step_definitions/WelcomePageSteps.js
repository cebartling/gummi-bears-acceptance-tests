import { Given, Then, When } from 'cucumber';
import WelcomePage from '../page_objects/WelcomePage';

Given(/^I am at the welcome page$/, async function () {
  const welcomePage = new WelcomePage(this);
  await welcomePage.openPage();
});

Given(/^I am signed in at the welcome page$/, async function () {
  const welcomePage = new WelcomePage(this);
  await welcomePage.openPage();
  await welcomePage.clickSignInNavigationLink();
  await welcomePage.verifyPage();
  await welcomePage.verifyNavigationMenu();
});

When(/^I navigate to the welcome page$/, async function () {
  const welcomePage = new WelcomePage(this);
  await welcomePage.openPage();
});

When(/^I click the sign in nav link$/, async function () {
  const welcomePage = new WelcomePage(this);
  await welcomePage.clickSignInNavigationLink();
});

Then(/^I should see the welcome page$/, async function () {
  const welcomePage = new WelcomePage(this);
  await welcomePage.verifyPage();
});

Then(/^I should see the authenticated navigation menu$/, async function () {
  const welcomePage = new WelcomePage(this);
  await welcomePage.verifyNavigationMenu();
});
