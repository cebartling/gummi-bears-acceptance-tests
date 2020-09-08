/* eslint-disable func-names */
import {
  After, AfterAll, Before, BeforeAll,
} from 'cucumber';
import DatabaseContext from '../support/DatabaseContext';

BeforeAll(async () => {
  await DatabaseContext.openDatabaseConnection();
});

AfterAll(async () => {
  await DatabaseContext.closeDatabaseConnection();
});

Before(async function () {
  await this.openBrowserPage();
});

After(async function () {
  await this.closeBrowser();
});
