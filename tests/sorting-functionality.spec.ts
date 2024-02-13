import { HomePage } from '../src/pages/home.page';
import { expect, test } from '@playwright/test';

test.describe('Verifying sort functionality', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('user can sort by Name(A-Z) @REQ-08-01', async () => {
    const expectedText = ' Adjustable Wrench ';
    await homePage.sortSelect.selectOption('name,asc');
    await expect.soft(homePage.sortedProduct).toBeVisible();
    await expect(homePage.sortedProduct).toHaveText(expectedText);
  });
  test('user can sort by Name(Z-A) @REQ-08-02', async () => {
    const expectedText = ' Wood Saw ';
    await homePage.sortSelect.selectOption('name,desc');
    await expect.soft(homePage.sortedProduct).toBeVisible();
    await expect(homePage.sortedProduct).toHaveText(expectedText);
  });
  test('user can sort by Price(High - Low) @REQ-08-03', async () => {
    const expectedText = ' Drawer Tool Cabinet ';
    await homePage.sortSelect.selectOption('price,desc');
    await expect.soft(homePage.sortedProduct).toBeVisible();
    await expect(homePage.sortedProduct).toHaveText(expectedText);
  });
  test('user can sort by Price(Low - High) @REQ-08-04', async () => {
    const expectedText = ' Washers ';
    await homePage.sortSelect.selectOption('price,asc');
    await expect.soft(homePage.sortedProduct).toBeVisible();
    await expect(homePage.sortedProduct).toHaveText(expectedText);
  });
});
