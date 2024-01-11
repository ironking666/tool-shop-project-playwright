import { randomUserData } from '../test-data/user.data';
import { Page } from 'playwright/test';

export class RegisterPage {
  url = '#/auth/register';
  firstName = this.page.locator('[data-test="first-name"]');
  lastName = this.page.locator('[data-test="last-name"]');
  dateOfBirth = this.page.locator('[data-test="dob"]');
  address = this.page.locator('[data-test="address"]');
  postcode = this.page.locator('[data-test="postcode"]');
  city = this.page.locator('[data-test="city"]');
  state = this.page.locator('[data-test="state"]');
  country = this.page.locator('[data-test="country"]');
  phone = this.page.locator('[data-test="phone"]');
  emailAddress = this.page.locator('[data-test="email"]');
  password = this.page.locator('[data-test="password"]');
  registerButton = this.page.locator('[data-test="register-submit"]');

  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async register(): Promise<void> {
    await this.firstName.fill(randomUserData.randomUserName);
    await this.lastName.fill(randomUserData.randomUserLastName);
    await this.dateOfBirth.type(randomUserData.dateOfBirth);
    await this.address.fill(randomUserData.address);
    await this.postcode.fill(randomUserData.postcode);
    await this.city.fill(randomUserData.city);
    await this.state.fill(randomUserData.state);
    await this.country.selectOption('US');
    await this.phone.fill(randomUserData.phone);
    await this.emailAddress.fill(randomUserData.randomUserEmail);
    await this.password.fill(randomUserData.randomUserPassword);
    await this.registerButton.click();
  }
}
