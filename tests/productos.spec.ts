import { test, expect } from '@playwright/test';

test.describe('P2 - Productos', () => {

  test('Visualización de productos', async ({ page }) => {
    await page.goto('http://localhost:3000/productos');
    await expect(page.locator('.producto')).toHaveCount(3);
  });

  test('UI de productos no está vacía', async ({ page }) => {
    await page.goto('http://localhost:3000/productos');
    await expect(page.locator('h1')).toHaveText('Productos de Ahorro');
  });

  test('Acceso a URL inexistente devuelve 404', async ({ page }) => {
    const response = await page.goto('http://localhost:3000/noexiste');
    expect(response?.status()).toBe(404);
  });

  test('Acceso no autorizado devuelve 401', async ({ page }) => {
    const response = await page.goto('http://localhost:3000/perfil');
    expect(response?.status()).toBe(401);
  });

});