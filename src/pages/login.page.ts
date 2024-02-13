import { testUser } from '../test-data/user.data';
import { Page } from 'playwright/test';

export class LoginPage {
  url = '#/auth/login';
  loginForm = this.page.getByRole('heading', { name: 'Login' });
  userEmailInput = this.page.locator('[data-test="email"]');
  userPasswordInput = this.page.locator('[data-test="password"]');
  logInButton = this.page.locator('[data-test="login-submit"]');
  passwordError = this.page.locator('[data-test="password-error"]');
  emailError = this.page.locator('[data-test="email-error"]');
  loginError = this.page.locator('[data-test="login-error"]');
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async login(): Promise<void> {
    await this.userEmailInput.fill(testUser.userEmail);
    await this.userPasswordInput.fill(testUser.userPassword);
    await this.logInButton.click();
  }
}
