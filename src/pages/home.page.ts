import { Page } from 'playwright/test';

export class HomePage {
  sortSelect = this.page.locator('[data-test="sort"]');
  sortedProduct = this.page.locator('h5.card-title').nth(0);
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('');
  }

  async title(): Promise<string> {
    return await this.page.title();
  }
}
