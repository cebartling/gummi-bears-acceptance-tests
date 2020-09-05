require('dotenv').config();
const { setWorldConstructor } = require("cucumber");
import puppeteer from "puppeteer";


class CustomWorld {
  constructor() {
    this.variable = 0;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }


}

setWorldConstructor(CustomWorld);
