import { Page } from 'playwright/test';

export class LoginPage {
  url = '#/auth/login';
  loginForm = this.page.getByRole('heading', { name: 'Login' });
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }
}
