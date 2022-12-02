const {test , expect} = require('@playwright/test');
test('My First test on Playwrights', async({page})=>{
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
})
