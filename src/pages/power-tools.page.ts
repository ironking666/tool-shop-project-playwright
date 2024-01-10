import { Page } from 'playwright/test';

export class PowerToolsPage {
  url = '/#/category/power-tools';
  powerToolsHeading = this.page
    .locator('div')
    .filter({ hasText: /^Category: Power Tools$/ });
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }
}
