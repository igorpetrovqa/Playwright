import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://storeinua.com/ru/'); //Додавання товарів в корзину + пошук товара
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Account' }).click();
  await page.getByPlaceholder('Email').fill('orlenkonikolaj01@gmail.com');
  await page.getByPlaceholder('Пароль').fill('m6dtndpm');
  await page.getByRole('button', { name: 'Войти в личный кабинет' }).click();
  await page.getByPlaceholder('Поиск товара').click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Apple Iphone 16');
  await page.getByText('Apple iPhone 16 128GB Black (').click();
  await page.getByRole('button', { name: 'Купить', exact: true }).click();
  await page.locator('.input-quantity > button:nth-child(3)').first().click();
  await page.locator('.input-quantity > button:nth-child(3)').first().click();
  await page.locator('.input-quantity__btn').first().click();
  await page.locator('.input-quantity__btn').first().click();
});