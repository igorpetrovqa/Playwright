import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://storeinua.com/ru/'); //Успішна вторизація з валідними данними
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Account' }).click();
  await page.getByPlaceholder('Email').fill('orlenkonikolaj01@gmail.com');
  await page.getByPlaceholder('Пароль').fill('m6dtndpm');
  await page.getByRole('button', { name: 'Войти в личный кабинет' }).click();
  await expect(page.getByRole('heading', { name: 'Личный Кабинет' })).toBeVisible();

});