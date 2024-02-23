import { CheckoutPage } from '../src/pages/checkout.page';
import { HomePage } from '../src/pages/home.page';
import { ProductPage } from '../src/pages/product.page';
import { expect, test } from '@playwright/test';

test.describe('Verify cart', () => {
  let homePage: HomePage;
  let productPage: ProductPage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    await homePage.goto();
  });
  test.afterAll(async ({ page }) => {
    await page.close();
  });

  test('user can add product to cart @REQ-04-01', async ({}) => {
    await productPage.addProductToCart();

    await expect(productPage.expectedMessage).toBeVisible();
  });

  test('user can change product quantity in cart @REQ-04-02', async ({
    page,
  }) => {
    const checkoutPage = new CheckoutPage(page);
    await productPage.addProductToCart();
    await productPage.navigateToCart();
    await checkoutPage.changeQuantityInCart();

    expect(parseInt(await checkoutPage.quantity.inputValue())).toBeGreaterThan(
      1,
    );
  });

  test('user can delete product from cart @REQ-04-02', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await productPage.addProductToCart();
    await productPage.navigateToCart();
    await checkoutPage.removeProductFromCart();

    await expect(checkoutPage.priceInCart).toHaveText('$0.00');
  });
});
