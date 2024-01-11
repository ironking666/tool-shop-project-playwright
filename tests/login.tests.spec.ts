import { LoginPage } from '../src/pages/login.page';
import { randomUserData, testUser } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Verify login', () => {
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });
  test('login with correct credentials', async ({}) => {
    await loginPage.login();

    await expect(loginPage.loggedView).toBeVisible();
  });
  test('reject with empty login and password', async ({}) => {
    await loginPage.userEmailInput.fill('');
    await loginPage.userPasswordInput.fill('');
    await loginPage.logInButton.click();

    await expect(loginPage.emailError).toBeVisible();
    await expect(loginPage.passwordError).toBeVisible();
  });
  test('reject with empty login and correct password', async ({}) => {
    await loginPage.userEmailInput.fill('');
    await loginPage.userPasswordInput.fill(testUser.userPassword);
    await loginPage.logInButton.click();

    await expect(loginPage.emailError).toBeVisible();
  });
  test('reject with correct login and empty password', async ({}) => {
    await loginPage.userEmailInput.fill(testUser.userEmail);
    await loginPage.userPasswordInput.fill('');
    await loginPage.logInButton.click();

    await expect(loginPage.passwordError).toBeVisible();
  });
  test('reject with correct login and incorrect password', async ({}) => {
    await loginPage.userEmailInput.fill(testUser.userEmail);
    await loginPage.userPasswordInput.fill(randomUserData.randomUserPassword);
    await loginPage.logInButton.click();

    await expect(loginPage.loginError).toBeVisible();
  });
  test('reject with incorrect login and correct password', async ({}) => {
    await loginPage.userEmailInput.fill(randomUserData.randomUserEmail);
    await loginPage.userPasswordInput.fill(testUser.userPassword);
    await loginPage.logInButton.click();

    await expect(loginPage.loginError).toBeVisible();
  });
  test('reject with incorrect login and incorrect password', async ({}) => {
    await loginPage.userEmailInput.fill(randomUserData.randomUserEmail);
    await loginPage.userPasswordInput.fill(randomUserData.randomUserPassword);
    await loginPage.logInButton.click();

    await expect(loginPage.loginError).toBeVisible();
  });
});
