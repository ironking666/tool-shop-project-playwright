import { HomePage } from '../src/pages/home.page';
import { expect, test } from '@playwright/test';

test.describe('Verifying filters functionality', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.cardsAmount).toBeVisible();
  });
  test.afterAll(async ({ page }) => {
    await page.close();
  });

  test('user can filter by category @REQ-10-01', async () => {
    const expectedText = 'Claw Hammer with Shock Reduction Grip';
    await homePage.handToolsCheckbox.check();
    await expect(homePage.sortedProduct).toHaveText(expectedText);
    await expect(homePage.cardsAmount).toBeHidden();
  });
  test('user can filter by brand @REQ-10-02', async () => {
    const expectedText = ' Bolt Cutters ';
    await homePage.brandCheckbox.check();
    await expect(homePage.sortedProduct).toHaveText(expectedText);
    await expect(homePage.cardsAmount).toBeHidden();
  });
});
