import { Page } from 'playwright/test';

export class ProductPage {
  product = this.page.locator('.card-title').filter({ hasText: 'Thor Hammer' });
  addToCartButton = this.page.locator('[data-test="add-to-cart"]');
  cartIcon = this.page.locator('[data-test="nav-cart"]');
  expectedMessage = this.page.getByText('Product added to shopping');
  alertMessage = this.page.locator('.toast-body');
  addToFavoritesButton = this.page.locator('[data-test="add-to-favorites"]');

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

  async addToFavorites(): Promise<void> {
    await this.addToFavoritesButton.click();
  }
}
