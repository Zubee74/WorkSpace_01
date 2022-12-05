import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');
  await page.getByRole('link').first().click();
  await page.getByRole('heading', { name: 'Login Form' }).click();
  await page.getByPlaceholder('Enter your username').click();
  await page.getByPlaceholder('Enter your username').fill('Admin');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('Admin@123');
  await page.getByLabel('Remember Me').check();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'ACME' }).click();
  await page.locator('.logged-user-toggler-arrow > .os-icon').click();
  await page.locator('.logged-user-toggler-arrow > .os-icon').click();
  await page.locator('.avatar-w > img').first().click();
  await page.locator('.top-icon > i').click();
});