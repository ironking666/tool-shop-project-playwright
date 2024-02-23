import { CheckoutPage } from '../src/pages/checkout.page';
import { HomePage } from '../src/pages/home.page';
import { LoginPage } from '../src/pages/login.page';
import { ProductPage } from '../src/pages/product.page';
import { RegisterPage } from '../src/pages/register.page';
import { randomUserData } from '../src/test-data/user.data';
import { PaymentView } from '../src/views/payment.view';
import { expect, test } from '@playwright/test';

test.describe('Verify shopping flow', () => {
  let productPage: ProductPage;
  let homePage: HomePage;
  let checkoutPage: CheckoutPage;
  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    homePage = new HomePage(page);
    checkoutPage = new CheckoutPage(page);
    await homePage.goto();
    await productPage.addProductToCart();
    await productPage.navigateToCart();
    await checkoutPage.proceedToCheckout.click();
  });
  test.afterAll(async ({ page }) => {
    await page.close();
  });

  test('user can buy and pay for the order @REQ-06-01', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);
    const paymentView = new PaymentView(page);
    await loginPage.login();
    await checkoutPage.proceedToCheckout2.click();
    await page.waitForLoadState('networkidle');
    await registerPage.postcode.fill(randomUserData.postcode);
    await registerPage.state.fill(randomUserData.state);
    await checkoutPage.proceedToCheckout3.click();
    await paymentView.cashOnDeliveryPayment();
    await expect.soft(paymentView.paymentSuccessAlert).toBeVisible();
    await paymentView.confirmButton.click();
    await expect(paymentView.orderConfirmation).toBeVisible();
  });
  test('user cannot place an order as a guest @REQ-06-02', async () => {
    await expect(checkoutPage.proceedToCheckout2).toBeHidden();
  });
});
