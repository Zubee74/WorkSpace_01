const {test , expect} = require('@playwright/test');

test('HRM career page test', async ({ page }) => {
  await page.goto('https://orangehrm.orangehrm.com/recruitmentApply/applyVacancyAdvanced/id/138');
  await page.getByText('Job Application - Associate Tech Lead/ Tech Lead').click();
  await page.locator('label').filter({ hasText: 'First Name*' }).getByRole('emphasis').click();
  await page.getByLabel('First Name*').fill('Mohammad');
  await page.getByLabel('Middle Name').click();
  await page.getByLabel('Middle Name').fill('Yusuf');
  await page.getByText('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Zubair');
  await page.getByLabel('Email*').click();
  await page.getByLabel('Email*').fill('mizubair99@gmail.com');
  await page.getByLabel('Contact Number').click();
  await page.getByLabel('Contact Number').fill('9766144370');
  await page.getByPlaceholder('Enter comma separated words about your suitability for this position (eg: skills)').click();
  await page.getByPlaceholder('Enter comma separated words about your suitability for this position (eg: skills)').fill('Java, Javascript, Playwright');
  await page.getByPlaceholder('Any other notes').click();
  await page.getByPlaceholder('Any other notes').fill('I want to apply for the listed position');
  await page.locator('#applyForJobButton').click();
});