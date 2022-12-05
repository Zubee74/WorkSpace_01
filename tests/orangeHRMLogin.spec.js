import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('img', { name: 'company-branding' }).click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  //await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Betty Boop' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});