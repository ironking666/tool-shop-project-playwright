import { Page } from 'playwright';

export class PaymentView {
  paymentSelect = this.page.locator('[data-test="payment-method"]');
  bankTransfer = this.page
    .locator('[data-test="payment-method"]')
    .selectOption('1: Bank Transfer');
  cashOnDelivery = this.page.locator('[data-test="payment-method"]');
  //.selectOption('2: Cash on Delivery');
  creditCard = this.page
    .locator('[data-test="payment-method"]')
    .selectOption('3: Credit Card');
  bNPL = this.page
    .locator('[data-test="payment-method"]')
    .selectOption('4: Buy Now Pay Later');
  giftCard = this.page
    .locator('[data-test="payment-method"]')
    .selectOption('5: Gift Card');
  confirmButton = this.page.locator('[data-test="finish"]');
  paymentSuccessAlert = this.page.locator('.alert.alert-success');
  orderConfirmation = this.page.locator('#order-confirmation');

  constructor(private page: Page) {}

  async cashOnDeliveryPayment(): Promise<void> {
    await this.cashOnDelivery.selectOption('2: Cash on Delivery');
    await this.confirmButton.click();
  }
}
