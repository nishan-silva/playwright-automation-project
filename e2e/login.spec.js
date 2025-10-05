import { test, expect } from '@playwright/test';
import { LoginPageActions } from '../pageObjects/PageActions/LoginPageActions.js';

let loginPage;

test.describe('The login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPageActions(page); // ✅ Create instance per test
  });

  test('allow to login', async () => {
    await loginPage.typeUserName('Admin');
    await loginPage.typePassword('admin123');
    await loginPage.clickLogin();
  });
});
