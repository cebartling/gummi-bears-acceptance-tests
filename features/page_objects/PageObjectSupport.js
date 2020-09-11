import { expect } from 'chai';

class PageObjectSupport {
  constructor(world) {
    this.world = world;
  }

  async click(selector) {
    await this.world.page.waitForSelector(selector);
    await this.world.page.click(selector);
  }

  async pressKey(key) {
    await this.world.page.keyboard.press(key);
  }

  async typeIn(selector, inputText) {
    await this.world.page.waitForSelector(selector);
    const elementHandle = await this.world.page.$(selector);
    await elementHandle.type(inputText);
  }

  async textContentBySelector(selector) {
    await this.world.page.waitForSelector(selector);
    return this.world.page.$eval(selector, (el) => el.textContent.trim());
  }

  async elementsBySelector(selector) {
    await this.world.page.waitForSelector(selector);
    return this.world.page.$$(selector);
  }

  async xpath(xpathQuery) {
    await this.world.page.waitForXPath(xpathQuery);
    return this.world.page.$x(xpathQuery);
  }

  async textEquals(selector, expectedText) {
    await this.world.page.waitForSelector(selector);
    const actual = await this.world.page.$eval(selector, (el) => el.innerText);
    expect(actual).to.be.eql(expectedText);
  }

  async textContains(selector, expectedTextFragment) {
    await this.world.page.waitForSelector(selector);
    const result = await this.world.page.$eval(selector,
      (el, txt) => el.innerText.includes(txt), expectedTextFragment);
    expect(result).to.be.true;
  }

  // const setDevice = async (deviceDescriptor) => {
  //   if (deviceDescriptor) return this.world.page.emulate(deviceDescriptor);
  //   return Promise.resolve();
  // };
  //
  // const setLocation = async (coords) => {
  //   if (coords) {
  //     await scope.context.overridePermissions(scope.origin, ['geolocation']);
  //     return this.world.page.setGeolocation(coords);
  //   }
  //   return Promise.resolve();
  // };
  //
  // const setHeaders = async (headers) => {
  //   await this.world.page.setExtraHTTPHeaders(headers);
  // };
  //
  // const clickOn = async (name) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector);
  //   const elementHandle = await this.world.page.$(selector);
  //   await elementHandle.click();
  // };
  //
  //
  // const hrefEquals = async (name, href) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector);
  //   equal(await this.world.page.$eval(selector, (el) => el.href), href);
  // };
  //
  // const hrefIncludes = async (name, href) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector);
  //   equal(
  //     await this.world.page.$eval(
  //       selector,
  //       (el, h) => el.href.includes(h),
  //       href
  //     ),
  //     true
  //   );
  // };
  //
  // const saveHref = async (name) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector);
  //   scope.savedHref = await this.world.page.$eval(selector, (el) => el.href);
  // };
  //
  // const srcEquals = async (name, src) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector);
  //   equal(await this.world.page.$eval(selector, (el) => el.src), src);
  // };
  //
  // const seeElement = async (name) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector);
  //   equal(await this.world.page.$eval(selector, (el) => Boolean(el)), true);
  // };
  //
  // const seeVisibleElement = async (name) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector, { visible: true });
  //
  //   strictEqual(
  //     await this.world.page.$eval(selector, (el) => Boolean(el)),
  //     true
  //   );
  // };
  //
  // const noElement = async (name) => {
  //   try {
  //     const elemHandle = await getElemHandle(name, { timeout: 3000 });
  //     strictEqual(elemHandle, null);
  //   } catch (error) {
  //     assert(true);
  //   }
  // };
  //

  async countElements(selector) {
    await this.world.page.waitForSelector(selector);
    return this.world.page.$eval(selector, (el) => el.length);
  }

  async elementCountEquals(selector, expectedCount) {
    await this.world.page.waitForSelector(selector);
    const actualCount = await this.world.page.$eval(selector, (el) => el.length);
    expect(actualCount).to.be.eql(expectedCount);
  }

  async styleEquals(selector, attr, expectedValue) {
    await this.world.page.waitForSelector(selector);
    const actualStyleValue = await this.world.page.$eval(selector,
      (el, key) => el.style[key], attr);
    expect(actualStyleValue).to.be.eql(expectedValue);
  }

  async urlEquals(expectedUrl) {
    await this.world.page.waitForNavigation();
    expect(this.world.page.url()).to.be.eql(expectedUrl);
  }

  async pathEquals(path) {
    await this.world.page.waitForNavigation();
    const currentPathname = new URL(this.world.page.url()).pathname;
    expect(currentPathname).to.be.eql(path);
  }

  async waitFor(secs) {
    await this.world.page.waitFor(secs * 1000);
  }
}

export default PageObjectSupport;
