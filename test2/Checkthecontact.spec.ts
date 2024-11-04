import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://storeinua.com/ru/'); //Перевірка контактів
  await page.getByRole('banner').getByRole('link', { name: 'Контакты' }).click();
  await page.getByRole('button', { name: 'close button' }).click();
  await page.evaluate(() => window.scrollBy(5, window.innerHeight));
  await expect(page.getByRole('link', { name: '+38(067)871-98-50' }).first()).toBeVisible();
});