import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://storeinua.com/ru/');   //Робота фільтра
  await page.getByRole('link', { name: 'Category Watch Watch' }).click();
  await page.getByPlaceholder('до').click();
  await page.getByPlaceholder('до').click({
    clickCount: 3
  });
  await page.getByPlaceholder('до').fill('20000');
  await page.getByRole('button', { name: 'Ок', exact: true }).click();
  await page.locator('.circle-btn').first().click();
  await page.locator('label').filter({ hasText: 'Apple Watch SE 2 (46)' }).locator('div').first().click();
  await page.locator('label').filter({ hasText: 'Apple Watch Series 10 (+4)' }).locator('div').first().click();
  await page.locator('div:nth-child(4) > .h3 > .circle-btn').click();
  await page.locator('label').filter({ hasText: 'Громкая связь (13)' }).locator('div').first().click();
  await page.locator('label').filter({ hasText: 'Компас (+13)' }).locator('div').first().click();
  await page.getByText('Особенности').click();
  await page.getByRole('button', { name: 'close button' }).click();
});