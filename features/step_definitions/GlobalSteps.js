import {After, Before} from "cucumber";

Before(async function(testCase) {
    return await this.openBrowserPage();
});

After(async function() {
    return await this.closeBrowser();
});
