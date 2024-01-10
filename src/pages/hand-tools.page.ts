import { Page } from 'playwright/test';

export class HandToolsPage {
  url = '/#/category/hand-tools';
  handToolsHeading = this.page
    .locator('div')
    .filter({ hasText: /^Category: Hand Tools$/ });
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }
}
