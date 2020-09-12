/* eslint-disable func-names */
import {
  After, AfterAll, Before, BeforeAll,
} from 'cucumber';
import DatabaseContext from '../support/DatabaseContext';
import PlaywrightContext from '../support/PlaywrightContext';

BeforeAll(async () => {
  await DatabaseContext.openDatabaseConnection();
  await PlaywrightContext.launchBrowser();
});

AfterAll(async () => {
  await PlaywrightContext.closeBrowser();
  await DatabaseContext.closeDatabaseConnection();
});

Before(async () => {
  await PlaywrightContext.createContext();
  await PlaywrightContext.createPage();
});

After(async () => {
  await PlaywrightContext.closePage();
  await PlaywrightContext.closeContext();
});
