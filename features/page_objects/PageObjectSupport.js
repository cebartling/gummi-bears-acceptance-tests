import { expect } from 'chai';

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

  async elementsBySelector(selector) {
    let found;
    try {
      await this.world.page.waitForSelector(selector);
      found = await this.world.page.$$(selector);
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

  // const openPage = async (url) => {
  //   this.world.page = await scope.context.newPage();
  //   this.world.page.setDefaultTimeout(DEFAULT_TIMEOUT);
  //
  //   await this.world.page.goto(url);
  //   scope.origin = url.slice(0, url.indexOf('?'));
  // };
  //
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
  // const typeIn = async (name, query) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector);
  //   const elementHandle = await this.world.page.$(selector);
  //   await elementHandle.type(query);
  // };
  //
  // const pressKey = async (key) => {
  //   await this.world.page.keyboard.press(key);
  // };
  //
  // const textEquals = async (name, text) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector);
  //   equal(await this.world.page.$eval(selector, (el) => el.innerText), text);
  // };
  //
  // const textIncludes = async (name, text) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector);
  //   equal(
  //     await this.world.page.$eval(
  //       selector,
  //       (el, txt) => el.innerText.includes(txt),
  //       text
  //     ),
  //     true
  //   );
  // };
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
  // const countElements = async (name, count) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector);
  //   const elemLen = await this.world.page.$eval(selector, (el) => el.length);
  //   equal(elemLen, count);
  // };
  //
  // const compareElementCount = async (name, operator, count) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector);
  //   const elemLen = await this.world.page.$eval(selector, (el) => el.length);
  //   equal(elemLen, count);
  //
  //   if (operator === 'more') {
  //     equal(elemLen > count, true);
  //   } else {
  //     equal(elemLen < count, true);
  //   }
  // };
  //
  // const styleEquals = async (attr, name, val) => {
  //   const selector = getSelector(name);
  //   await this.world.page.waitForSelector(selector);
  //   equal(
  //     await this.world.page.$eval(selector, (el, key) => el.style[key], attr),
  //     val
  //   );
  // };
  //
  // const urlEquals = async () => {
  //   await this.world.page.waitForNavigation();
  //   equal(this.world.page.url(), scope.savedHref);
  // };

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
