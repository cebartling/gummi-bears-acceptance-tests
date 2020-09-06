import {After, Before} from "cucumber";

Before(async function(testCase) {
    await this.openDatabaseConnection();
    return await this.openBrowserPage();
});

After(async function() {
    await this.closeDatabaseConnection();
    return await this.closeBrowser();
});
