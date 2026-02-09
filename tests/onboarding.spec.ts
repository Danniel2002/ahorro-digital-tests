import { test, expect } from '@playwright/test';

test.describe('P0 - Onboarding', () => {

  test('Registro exitoso con campos obligatorios', async ({ page }) => {
    await page.goto('http://localhost:3000/registro');
    await page.fill('#nombre', 'Juan Pérez');
    await page.fill('#email', 'juan@test.com');
    await page.fill('#password', 'Password123!');
    await page.click('#recaptcha-valid');
    await expect(page.locator('#registrarse')).toBeEnabled();
    await page.click('#registrarse');
    await expect(page.locator('.mensaje-bienvenida')).toBeVisible();
  });

test('Registro fallido por recaptcha inválido', async ({ page }) => {
  await page.goto('http://localhost:3000/registro');
  await page.fill('#nombre', 'Ana');
  await page.fill('#email', 'ana@test.com');
  await page.fill('#password', 'Password123!');
  await page.click('#recaptcha-invalid');
  await expect(page.locator('#registrarse')).toBeDisabled();
  await expect(page.locator('.mensaje-error')).toBeVisible();
});

  test('Botón deshabilitado si falta nombre', async ({ page }) => {
    await page.goto('http://localhost:3000/registro');
    await page.fill('#email', 'test@test.com');
    await page.fill('#password', 'Password123!');
    await expect(page.locator('#registrarse')).toBeDisabled();
  });

  test('Login fallido sin password', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('#usuario', 'user');
    await page.click('#ingresar');
    await expect(page.locator('.mensaje-error')).toBeVisible();
  });

});