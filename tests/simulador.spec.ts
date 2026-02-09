import { test, expect } from '@playwright/test';

test.describe('P1 - Simulador', () => {

  test('Simulación exitosa con monto válido', async ({ page }) => {
    await page.goto('http://localhost:3000/simulador');
    await page.fill('#monto', '100000');
    await page.click('#calcular');
    await expect(page.locator('.resultado')).toBeVisible();
  });

  test('Simulación inválida con monto 0', async ({ page }) => {
    await page.goto('http://localhost:3000/simulador');
    await page.fill('#monto', '0');
    await page.click('#calcular');
    await expect(page.locator('.mensaje-error')).toBeVisible();
  });

  test('Simulación inválida sin monto', async ({ page }) => {
    await page.goto('http://localhost:3000/simulador');
    await page.click('#calcular');
    await expect(page.locator('.mensaje-error')).toBeVisible();
  });

});