import { ContactPage } from '../src/pages/contact.page';
import { HomePage } from '../src/pages/home.page';
import { LoginPage } from '../src/pages/login.page';
import { expect, test } from '@playwright/test';

test.describe('Verify service main pages', () => {
  test('home page title', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    const title = await homePage.title();
    expect(title).toContain('Practice Software Testing - Toolshop');
  });

  test('login page title', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await expect(loginPage.loginForm).toBeVisible();
  });

  test('contact page title', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();

    await expect(contactPage.contactForm).toBeVisible();
  });
});
