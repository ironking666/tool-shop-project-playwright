import { paymentsData, randomUserData } from '../test-data/user.data';
import { Page } from 'playwright';

export class PaymentView {
  paymentSelect = this.page.locator('[data-test="payment-method"]');
  bankTransfer = this.page.locator('[data-test="payment-method"]');

  cashOnDelivery = this.page.locator('[data-test="payment-method"]');
  //.selectOption('2: Cash on Delivery');
  creditCard = this.page
    .locator('[data-test="payment-method"]')
    .selectOption('3: Credit Card');
  bNPL = this.page.locator('[data-test="payment-method"]');
  giftCard = this.page.locator('[data-test="payment-method"]');
  //.selectOption('5: Gift Card');
  confirmButton = this.page.locator('[data-test="finish"]');
  paymentSuccessAlert = this.page.locator('.alert.alert-success');
  orderConfirmation = this.page.locator('#order-confirmation');
  giftCardNumber = this.page.locator('[data-test="gift_card_number"]');
  validationCode = this.page.locator('[data-test="validation_code"]');
  bankName = this.page.locator('[data-test="bank_name"]');
  accountNameInput = this.page.locator('[data-test="account_name"]');
  accountNumberInput = this.page.locator('[data-test="account_number"]');
  monthlyInstallments = this.page.locator('[data-test="monthly_installments"]');

  constructor(private page: Page) {}

  async cashOnDeliveryPayment(): Promise<void> {
    await this.cashOnDelivery.selectOption('2: Cash on Delivery');
    await this.confirmButton.click();
  }

  async giftCardPayment(): Promise<void> {
    const giftCardNumber = paymentsData.randomGiftCardNumber.toString();
    const validationCode = paymentsData.randomValidationCode.toString();
    await this.giftCard.selectOption('5: Gift Card');
    await this.confirmButton.click();
    await this.giftCardNumber.fill(giftCardNumber);
    await this.validationCode.fill(validationCode);
    await this.confirmButton.click();
  }
  async bankTransferPayment(): Promise<void> {
    const accountName = `${randomUserData.randomUserName} ${randomUserData.randomUserLastName} personal account`;
    const accountNumber = paymentsData.randomAccountNumber.toString();
    await this.bankTransfer.selectOption('1: Bank Transfer');
    await this.bankName.fill(paymentsData.randomBankName);
    await this.accountNameInput.fill(accountName);
    await this.accountNumberInput.fill(accountNumber);
    await this.confirmButton.click();
  }
  async buyNowPayLatterPayment(): Promise<void> {
    await this.bNPL.selectOption('4: Buy Now Pay Later');
    await this.monthlyInstallments.selectOption('3 monthly installments');
    await this.confirmButton.click();
  }
}
