import * as dotenvConfig from "dotenv/config";
import { expect } from "chai";
import { setWorldConstructor, setDefaultTimeout } from "cucumber";
import puppeteer from "puppeteer";
import {WelcomePage} from "../page_objects/WelcomePage";

// const PAGE = process.env.WEBAPP_URL;
const HEADLESS = process.env.HEADLESS !== 'false';
// const ENTER_EVENT = "Enter";
// const INPUT_SELECTOR = "section input";
// const TODO_ITEMS_SELECTOR = "ul.todo-list li";
// const todoItemSelector = index => `ul.todo-list li:nth-child(${index})`;
// const todoItemLabelSelector = index => `${todoItemSelector(index)} label`;
// const deleteButtonSelector = index => `${todoItemSelector(index)} button`;

setDefaultTimeout(30 * 1000);

const welcomePage = new WelcomePage();

class GummiBearsWorld {

  async openBrowserPage() {
    this.browser = await puppeteer.launch({ headless: HEADLESS });
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }

  async openWelcomePage() {
    await welcomePage.openPage(this.page);
  }

  async verifyWelcomePage() {
    await welcomePage.verifyPage(this.page);
  }

  async clickSignInNavLink() {
    await welcomePage.clickSignInNavLink(this.page);
  }

  async verifyNavigationMenu() {
    await welcomePage.verifyNavigationMenu(this.page);
  }

  // async openTodoPage() {
  //   await this.page.goto(PAGE);
  // }
  //
  // async writeTodo(todo) {
  //   await this.page.waitForSelector(INPUT_SELECTOR);
  //   this.inputElement = await this.page.$(INPUT_SELECTOR);
  //   await this.inputElement.type(todo);
  //   await this.inputElement.press(ENTER_EVENT);
  // }
  //
  // async checkNumberOfTodos(number) {
  //   const todoItemCount = await this.page.$$eval(
  //       TODO_ITEMS_SELECTOR,
  //       items => items.length
  //   );
  //   expect(todoItemCount).to.eql(parseInt(number));
  // }
  //
  // async checkTodoIsInList(todoIndex, todo) {
  //   const foundTodo = await this.page.$eval(
  //       todoItemLabelSelector(todoIndex),
  //       el => el.textContent.trim()
  //   );
  //   expect(foundTodo).to.eql(todo);
  // }
  //
  // async deleteTodo(todoIndex) {
  //   await this.page.hover(todoItemSelector(todoIndex));
  //   await this.page.click(deleteButtonSelector(todoIndex));
  // }

}

setWorldConstructor(GummiBearsWorld);
