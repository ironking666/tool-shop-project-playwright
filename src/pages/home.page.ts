import { Page } from 'playwright/test';

export class HomePage {
  sortSelect = this.page.locator('[data-test="sort"]');
  sortedProduct = this.page.locator('h5.card-title').nth(0);
  searchInput = this.page.locator('input[data-test="search-query"]');
  searchButton = this.page.locator('button[data-test="search-submit"]');
  searchReset = this.page.locator('button[data-test="search-reset"]');
  handToolsCheckbox = this.page
    .locator('label')
    .filter({ hasText: ' Hand Tools ' });
  brandCheckbox = this.page
    .locator('label')
    .filter({ hasText: ' MightyCraft Hardware' });

  cardsAmount = this.page.locator('li').filter({ hasText: '4' });

  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('');
  }

  async title(): Promise<string> {
    return await this.page.title();
  }
}
