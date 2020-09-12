/* eslint-disable func-names */
import {
  After, AfterAll, Before, BeforeAll,
} from 'cucumber';
import DatabaseContext from '../support/DatabaseContext';
import PlaywrightContext from '../support/PlaywrightContext';

BeforeAll(async () => {
  await DatabaseContext.openDatabaseConnection();
});

AfterAll(async () => {
  await DatabaseContext.closeDatabaseConnection();
});

Before(async () => {
  await PlaywrightContext.launchBrowser();
  await PlaywrightContext.createContext();
  await PlaywrightContext.createPage();
});

After(async () => {
  await PlaywrightContext.closePage();
  await PlaywrightContext.closeContext();
  await PlaywrightContext.closeBrowser();
});
