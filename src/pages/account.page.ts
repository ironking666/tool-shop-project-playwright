import { Page } from 'playwright/test';

export class AccountPage {
  url = '#/account';
  loggedView = this.page.locator('h1').filter({ hasText: /^My account$/ });
  favorites = this.page.locator('[data-test="nav-favorites"]');
  deleteFromFavorites = this.page.locator('[data-test="delete"]').nth(0);
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('');
  }

  async title(): Promise<string> {
    return await this.page.title();
  }
}
