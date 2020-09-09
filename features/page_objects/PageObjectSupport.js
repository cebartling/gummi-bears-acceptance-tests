class PageObjectSupport {
  constructor(world) {
    this.world = world;
  }

  async click(selector) {
    try {
      await this.world.page.waitForSelector(selector);
      await this.world.page.click(selector);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  async textContentBySelector(selector) {
    let found;
    try {
      await this.world.page.waitForSelector(selector);
      found = await this.world.page.$eval(selector, (el) => el.textContent.trim());
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
    return found;
  }

  async xpath(xpathQuery) {
    let match;
    try {
      await this.world.page.waitForXPath(xpathQuery);
      match = await this.world.page.$x(xpathQuery);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
    return match;
  }
}

export default PageObjectSupport;
