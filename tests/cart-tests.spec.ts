import { HomePage } from '../src/pages/home.page';
import { expect, test } from '@playwright/test';

test.describe('Verify cart', () => {});
test('user can add product to cart @REQ-04-01', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.addProductToCart();

  await expect(homePage.expectedMessage).toBeVisible();
});

test('user can change product quantity in cart @REQ-04-02', async ({
  page,
}) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.addProductToCart();
  await homePage.navigateToCart();
  await homePage.changeQuantityInCart();

  expect(parseInt(await homePage.quantity.inputValue())).toBeGreaterThan(1);
});

test('user can delete product from cart @REQ-04-02', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.addProductToCart();
  await homePage.navigateToCart();
  await homePage.removeProductFromCart();

  await expect(homePage.priceInCart).toHaveText('$0.00');
});
