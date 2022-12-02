import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?dsh=S2047259917%3A1669962596590349&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAvwYw0_ulnGYzpOApmoCvKAyRj8JkQyHOdJcQJREwGmdbVpsf--79BTCBRgClHzK-zB70UHPA');
  await page.locator('div').filter({ hasText: 'Sign into continue to GmailEmail or phoneForgot email?Type the text you hear or ' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('mohdzubair9766@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Try again' }).click();
});