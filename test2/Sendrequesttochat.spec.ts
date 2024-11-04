import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://storeinua.com/ru/'); // Відправити заявку консультанту
  await page.getByLabel('Chat button').click();
  await page.getByLabel('Ім\'я * Введіть ім\'я').click();
  await page.getByLabel('Ім\'я * Введіть ім\'я').fill('Тест');
  await page.getByLabel('Телефон * Номер повинен містити від 9 до 16 цифр').click();
  await page.getByLabel('Телефон * Номер повинен містити від 9 до 16 цифр').fill('0506765874');
  await page.getByLabel('Введіть повідомлення Максимальна довжина тексту 500 символів').click();
  await page.getByLabel('Введіть повідомлення Максимальна довжина тексту 500 символів').fill('Тестове повідомлення');
  await page.getByText('Надіслати', { exact: true }).click();
  await page.waitForTimeout(3000);
  await expect(page.getByText('Ви відправили контактні дані')).toBeVisible();
  await page.goto('https://storeinua.com/ru/');
});