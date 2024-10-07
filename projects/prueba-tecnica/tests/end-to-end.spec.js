import { test, expect } from '@playwright/test';

test('test end to end', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Get new Fact' }).click();

  const fact = await page.getByRole('paragraph');
  await expect(fact).toBeVisible();
  await expect(fact).not.toBeEmpty();

  const factImage = await page.getByRole('img');
  const factImageSrc = await factImage.getAttribute('src');
  await expect(factImage).toBeVisible();
  await expect(factImageSrc.length).toBeGreaterThan(0);
});