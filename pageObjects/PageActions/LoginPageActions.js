import { LoginPageElements } from '../../pageObjects/PageElements/LoginLocators.js';

export class LoginPageActions {
  constructor(page) {
    this.page = page;
    this.locators = LoginPageElements;
  }

  async typeUserName(username) {
    await this.page.locator(this.locators.username).fill(username);
  }

    async typePassword(password) {
    await this.page.locator(this.locators.password).fill(password);
  }
}

