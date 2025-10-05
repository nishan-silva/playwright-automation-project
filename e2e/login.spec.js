import { test, expect } from '@playwright/test';
import { LoginPageActions } from '../pageObjects/PageActions/LoginPageActions.js';
import dotenv from 'dotenv';

dotenv.config();
const baseUrl = process.env.BASE_URL;

let loginPage;

test.describe('The login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    loginPage = new LoginPageActions(page); // ✅ Create instance per test
  });

  test('allow to login', async () => {
    await loginPage.typeUserName('Admin');
    await loginPage.typePassword('admin123');
    await loginPage.clickLogin();
  });
});
