import { CheckoutPage } from '../src/pages/checkout.page';
import { HomePage } from '../src/pages/home.page';
import { LoginPage } from '../src/pages/login.page';
import { ProductPage } from '../src/pages/product.page';
import { RegisterPage } from '../src/pages/register.page';
import { randomUserData } from '../src/test-data/user.data';
import { PaymentView } from '../src/views/payment.view';
import { expect, test } from '@playwright/test';

test.describe('Verify payments method', () => {
  let productPage: ProductPage;
  let homePage: HomePage;
  let checkoutPage: CheckoutPage;
  let loginPage: LoginPage;
  let registerPage: RegisterPage;
  let paymentView: PaymentView;
  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    homePage = new HomePage(page);
    checkoutPage = new CheckoutPage(page);
    loginPage = new LoginPage(page);
    registerPage = new RegisterPage(page);
    paymentView = new PaymentView(page);
    await homePage.goto();
    await productPage.addProductToCart();
    await productPage.navigateToCart();
    await checkoutPage.proceedToCheckout.click();
    await loginPage.login();
    await checkoutPage.proceedToCheckout2.click();
    await page.waitForLoadState('networkidle');
    await registerPage.postcode.fill(randomUserData.postcode);
    await registerPage.state.fill(randomUserData.state);
    await checkoutPage.proceedToCheckout3.click();
  });
  test.afterAll(async ({ page }) => {
    await page.close();
  });

  test('user can pay by cash on delivery @REQ-07-01', async () => {
    await paymentView.cashOnDeliveryPayment();
    await expect.soft(paymentView.paymentSuccessAlert).toBeVisible();
  });
  test('user can pay by gift card @REQ-07-02', async () => {
    await paymentView.giftCardPayment();
    await expect.soft(paymentView.paymentSuccessAlert).toBeVisible();
  });
  test('user can pay by bank transfer @REQ-07-03', async () => {
    await paymentView.bankTransferPayment();
    await expect.soft(paymentView.paymentSuccessAlert).toBeVisible();
  });
  test('user can buy now and pay latter @REQ-07-04', async () => {
    await paymentView.buyNowPayLatterPayment();
    await expect.soft(paymentView.paymentSuccessAlert).toBeVisible();
  });

  test('user can pay by credit card @REQ-07-05', async () => {
    await paymentView.creditCardPayment();
    await expect.soft(paymentView.paymentSuccessAlert).toBeVisible();
  });
});
