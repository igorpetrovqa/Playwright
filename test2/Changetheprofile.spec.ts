import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //Зміна данних
  await page.goto('https://storeinua.com/ru/');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Account' }).click();
  await page.getByPlaceholder('Email').fill('orlenkonikolaj01@gmail.com');
  await page.getByPlaceholder('Пароль').fill('m6dtndpm');
  await page.getByRole('button', { name: 'Войти в личный кабинет' }).click();
  await page.getByRole('button', { name: 'Сменить контактную информацию' }).click();
  await page.getByPlaceholder('Имя').click();
  await page.getByPlaceholder('Имя').fill('Зміна');
  await page.getByLabel('Телефон').click();
  await page.getByLabel('Телефон').fill('+38(050)-111-11-12');
  await page.getByRole('button', { name: 'Сохранить' }).click();
  await expect(page.getByText('Обновлено')).toBeVisible();
});