import { Page } from 'playwright/test';

export class CheckoutPage {
  url = '#/checkout';
  removeButton = this.page.getByRole('cell', { name: '' }).locator('a');
  expectedMessage = this.page.getByText('Product added to shopping');
  priceInCart = this.page.locator('td.col-md-2.text-end').nth(1);
  quantity = this.page.locator('input.form-control.quantity');

  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('');
  }

  async title(): Promise<string> {
    return await this.page.title();
  }

  async changeQuantityInCart(): Promise<void> {
    await this.quantity.fill('3');
    await this.quantity.press('Enter');
  }

  async removeProductFromCart(): Promise<void> {
    await this.removeButton.click();
  }
}
