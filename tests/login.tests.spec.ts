import { LoginPage } from '../src/pages/login.page';
import { randomUserData, testUser } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Verify login', () => {
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });
  test('login with correct credentials @REQ-03-01', async ({}) => {
    await loginPage.login();

    await expect(loginPage.loggedView).toBeVisible();
  });
  test('reject with empty login and password @REQ-03-02', async ({}) => {
    await loginPage.userEmailInput.fill('');
    await loginPage.userPasswordInput.fill('');
    await loginPage.logInButton.click();

    await expect(loginPage.emailError).toBeVisible();
    await expect(loginPage.passwordError).toBeVisible();
  });
  test('reject with empty login and correct password @REQ-03-03', async ({}) => {
    await loginPage.userEmailInput.fill('');
    await loginPage.userPasswordInput.fill(testUser.userPassword);
    await loginPage.logInButton.click();

    await expect(loginPage.emailError).toBeVisible();
  });
  test('reject with correct login and empty password @REQ-03-04', async ({}) => {
    await loginPage.userEmailInput.fill(testUser.userEmail);
    await loginPage.userPasswordInput.fill('');
    await loginPage.logInButton.click();

    await expect(loginPage.passwordError).toBeVisible();
  });
  test('reject with correct login and incorrect password REQ-03-05', async ({}) => {
    await loginPage.userEmailInput.fill(testUser.userEmail);
    await loginPage.userPasswordInput.fill(randomUserData.randomUserPassword);
    await loginPage.logInButton.click();

    await expect(loginPage.loginError).toBeVisible();
  });
  test('reject with incorrect login and correct password @REQ-03-06', async ({}) => {
    await loginPage.userEmailInput.fill(randomUserData.randomUserEmail);
    await loginPage.userPasswordInput.fill(testUser.userPassword);
    await loginPage.logInButton.click();

    await expect(loginPage.loginError).toBeVisible();
  });
  test('reject with incorrect login and incorrect password REQ-03-07', async ({}) => {
    await loginPage.userEmailInput.fill(randomUserData.randomUserEmail);
    await loginPage.userPasswordInput.fill(randomUserData.randomUserPassword);
    await loginPage.logInButton.click();

    await expect(loginPage.loginError).toBeVisible();
  });
});
