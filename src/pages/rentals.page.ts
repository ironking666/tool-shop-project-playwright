import { Page } from 'playwright/test';

export class RentalsPage {
  url = '/#/rentals';
  rentalsHeading = this.page
    .locator('div')
    .filter({ hasText: 'RentalsExcavatorAliquam' })
    .first();

  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }
}
