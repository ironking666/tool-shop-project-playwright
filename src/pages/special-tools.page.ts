import { Page } from 'playwright/test';

export class SpecialToolsPage {
  url = '/#/category/special-tools';
  specialToolsHeading = this.page
    .locator('div')
    .filter({ hasText: /^Category: Special Tools$/ });
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }
}
