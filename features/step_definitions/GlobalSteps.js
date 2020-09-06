import {After, AfterAll, Before, BeforeAll} from "cucumber";
import DatabaseContext from "../support/DatabaseContext";

BeforeAll(async function() {
    return await DatabaseContext.openDatabaseConnection();
});

AfterAll(async function() {
    return await DatabaseContext.closeDatabaseConnection();
});

Before(async function(testCase) {
    return await this.openBrowserPage();
});

After(async function() {
    return await this.closeBrowser();
});
