import { Page } from 'playwright/test';

export class HomePage {
  product = this.page
    .locator('.card-title')
    .filter({ hasText: 'Combination Pliers' });
  addToCartButton = this.page.locator('[data-test="add-to-cart"]');
  cartIcon = this.page.locator('[data-test="nav-cart"]');
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

  async addProductToCart(): Promise<void> {
    await this.product.click();
    await this.addToCartButton.click();
  }
  async navigateToCart(): Promise<void> {
    await this.cartIcon.click();
  }

  async changeQuantityInCart(): Promise<void> {
    await this.quantity.fill('3');
    await this.quantity.press('Enter');
  }

  async removeProductFromCart(): Promise<void> {
    await this.removeButton.click();
  }
}
