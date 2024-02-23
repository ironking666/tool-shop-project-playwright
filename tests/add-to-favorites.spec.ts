import { HomePage } from '../src/pages/home.page';
import { ProductPage } from '../src/pages/product.page';
import { expect, test } from '@playwright/test';

test.describe('Verify add to favorites function', () => {
  test('reject for not logged in user @REQ-05-01', async ({ page }) => {
    const productPage = new ProductPage(page);
    const homePage = new HomePage(page);
    const expectedMessage =
      'Unauthorized, can not add product to your favorite list.';

    await homePage.goto();
    await productPage.product.click();
    await productPage.addToFavorites();
    await expect(productPage.alertMessage).toHaveText(expectedMessage);
    await page.close();
  });
});
