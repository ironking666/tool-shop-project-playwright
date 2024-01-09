import { Page } from 'playwright/test';

export class ContactPage {
  url = '/#/contact';
  contactForm = this.page.getByRole('heading', { name: 'Contact' });
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }
}
