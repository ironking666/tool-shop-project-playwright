import { Page } from 'playwright/test';

export class OtherToolsPage {
  url = '/#/category/other';
  otherToolsHeading = this.page
    .locator('div')
    .filter({ hasText: /^Category: Other$/ });
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }
}
