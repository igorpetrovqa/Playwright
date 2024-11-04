import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://storeinua.com/ru/');//Перевірка додавання у бажані товари
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Account' }).click();
  await page.getByPlaceholder('Email').fill('orlenkonikolaj01@gmail.com');
  await page.getByPlaceholder('Пароль').fill('m6dtndpm');
  await page.getByRole('button', { name: 'Войти в личный кабинет' }).click();
  await page.getByLabel('Open menu').click();
  await page.getByRole('link', { name: 'Nav to Хелловін Хэллоуин' }).click();
  await page.getByRole('button', { name: 'close button' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'To wishlist' }).click();
  await page.getByRole('button', { name: 'To wishlist' }).click();
  await page.getByRole('button', { name: 'To wishlist' }).click();
  await page.getByRole('button', { name: 'Wishlist' }).click();
  await expect(page.getByRole('link', { name: 'Apple iPhone 15 Pro Max 256GB White Titanium (MU783)', exact: true })).toBeVisible();
});