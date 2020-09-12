import { expect } from 'chai';
import PlaywrightContext from '../support/PlaywrightContext';

class PageObjectSupport {
  async click(selector) {
    await PlaywrightContext.page.waitForSelector(selector);
    await PlaywrightContext.page.click(selector);
  }

  async pressKey(key) {
    await PlaywrightContext.page.keyboard.press(key);
  }

  async typeIn(selector, inputText) {
    await PlaywrightContext.page.waitForSelector(selector);
    const elementHandle = await PlaywrightContext.page.$(selector);
    await elementHandle.type(inputText);
  }

  async textContentBySelector(selector) {
    let result;
    try {
      await PlaywrightContext.page.waitForSelector(selector);
      result = await PlaywrightContext.page.$eval(selector, (el) => el.textContent.trim());
    } catch (err) {
      console.log('Exception thrown in textContentBySelector', err);
    }
    return result;
  }

  async elementsBySelector(selector) {
    await PlaywrightContext.page.waitForSelector(selector);
    return PlaywrightContext.page.$$(selector);
  }

  async xpath(xpathQuery) {
    await PlaywrightContext.page.waitForXPath(xpathQuery);
    return PlaywrightContext.page.$x(xpathQuery);
  }

  async textEquals(selector, expectedText) {
    await PlaywrightContext.page.waitForSelector(selector);
    const actual = await PlaywrightContext.page.$eval(selector, (el) => el.innerText);
    expect(actual).to.be.eql(expectedText);
  }

  async textContains(selector, expectedTextFragment) {
    await PlaywrightContext.page.waitForSelector(selector);
    const result = await PlaywrightContext.page.$eval(selector,
      (el, txt) => el.innerText.includes(txt), expectedTextFragment);
    expect(result).to.be.true;
  }

  // const setDevice = async (deviceDescriptor) => {
  //   if (deviceDescriptor) return playwrightContext.page.emulate(deviceDescriptor);
  //   return Promise.resolve();
  // };
  //
  // const setLocation = async (coords) => {
  //   if (coords) {
  //     await scope.context.overridePermissions(scope.origin, ['geolocation']);
  //     return playwrightContext.page.setGeolocation(coords);
  //   }
  //   return Promise.resolve();
  // };
  //
  // const setHeaders = async (headers) => {
  //   await playwrightContext.page.setExtraHTTPHeaders(headers);
  // };
  //
  // const clickOn = async (name) => {
  //   const selector = getSelector(name);
  //   await playwrightContext.page.waitForSelector(selector);
  //   const elementHandle = await playwrightContext.page.$(selector);
  //   await elementHandle.click();
  // };
  //
  //
  // const hrefEquals = async (name, href) => {
  //   const selector = getSelector(name);
  //   await playwrightContext.page.waitForSelector(selector);
  //   equal(await playwrightContext.page.$eval(selector, (el) => el.href), href);
  // };
  //
  // const hrefIncludes = async (name, href) => {
  //   const selector = getSelector(name);
  //   await playwrightContext.page.waitForSelector(selector);
  //   equal(
  //     await playwrightContext.page.$eval(
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
  //   await playwrightContext.page.waitForSelector(selector);
  //   scope.savedHref = await playwrightContext.page.$eval(selector, (el) => el.href);
  // };
  //
  // const srcEquals = async (name, src) => {
  //   const selector = getSelector(name);
  //   await playwrightContext.page.waitForSelector(selector);
  //   equal(await playwrightContext.page.$eval(selector, (el) => el.src), src);
  // };
  //
  // const seeElement = async (name) => {
  //   const selector = getSelector(name);
  //   await playwrightContext.page.waitForSelector(selector);
  //   equal(await playwrightContext.page.$eval(selector, (el) => Boolean(el)), true);
  // };
  //
  // const seeVisibleElement = async (name) => {
  //   const selector = getSelector(name);
  //   await playwrightContext.page.waitForSelector(selector, { visible: true });
  //
  //   strictEqual(
  //     await playwrightContext.page.$eval(selector, (el) => Boolean(el)),
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
    await PlaywrightContext.page.waitForSelector(selector);
    return PlaywrightContext.page.$eval(selector, (el) => el.length);
  }

  async elementCountEquals(selector, expectedCount) {
    await PlaywrightContext.page.waitForSelector(selector);
    const actualCount = await PlaywrightContext.page.$eval(selector, (el) => el.length);
    expect(actualCount).to.be.eql(expectedCount);
  }

  async styleEquals(selector, attr, expectedValue) {
    await PlaywrightContext.page.waitForSelector(selector);
    const actualStyleValue = await PlaywrightContext.page.$eval(selector,
      (el, key) => el.style[key], attr);
    expect(actualStyleValue).to.be.eql(expectedValue);
  }

  async urlEquals(expectedUrl) {
    await PlaywrightContext.page.waitForNavigation();
    expect(PlaywrightContext.page.url()).to.be.eql(expectedUrl);
  }

  async pathEquals(path) {
    await PlaywrightContext.page.waitForNavigation();
    const currentPathname = new URL(PlaywrightContext.page.url()).pathname;
    expect(currentPathname).to.be.eql(path);
  }

  async waitFor(secs) {
    await PlaywrightContext.page.waitFor(secs * 1000);
  }
}

export default PageObjectSupport;
