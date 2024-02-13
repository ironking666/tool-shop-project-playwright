import { HomePage } from '../src/pages/home.page';
import { expect, test } from '@playwright/test';

test.describe('Verifying search functionality', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('user can search by search area @REQ-09-01', async () => {
    const expectedText = 'Square Ruler';
    await homePage.searchInput.fill('Square Ruler');
    await homePage.searchButton.click();
    await expect(homePage.sortedProduct).toHaveText(expectedText);
  });
  test('user can clear search area @REQ-09-02', async () => {
    const expectedText = 'Square Ruler';
    await homePage.searchInput.fill('Square Ruler');
    await homePage.searchReset.click();
    await expect(homePage.sortedProduct).not.toHaveText(expectedText);
  });
});
