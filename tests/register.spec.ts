import { LoginPage } from '../src/pages/login.page';
import { RegisterPage } from '../src/pages/register.page';
import { expect, test } from '@playwright/test';

test.describe('Verify register', () => {
  test('register with correct credentials @REQ-02-01', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.register();
    await expect(loginPage.loginForm).toBeVisible();
    await page.close();
  });
});
