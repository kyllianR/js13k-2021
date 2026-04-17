import { test, expect } from '@playwright/test';

test('Le joueur à 100 PV au début de la partie', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.h')).toHaveText('100');
});

test('Game Over est caché au début de la partie', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.e')).toHaveAttribute('hidden');
});

test('Le score est de 0 au début de la partie', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.s')).toHaveText('0');
});