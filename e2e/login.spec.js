import { test, expect } from '@playwright/test';
import { LoginPageActions } from '../pageObjects/PageActions/LoginPageActions.js';
import loginData from '../fixtures/loginData.json' assert { type: 'json' };

let loginPage;
let data;

test.describe('Login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPageActions(page); // Create instance per test
    data = loginData; // Load once before all tests test
  });

  test('should log in successfully with valid credentials', async () => {
    await loginPage.typeUserName(data.validUser.username);
    await loginPage.typePassword(data.validUser.password);
    await loginPage.clickLogin();
  });

    test('should display an error message for invalid credentials', async () => {
    await loginPage.typeUserName(data.invalidUser.username);
    await loginPage.typePassword(data.invalidUser.password);
    await loginPage.clickLogin();
  });
});
