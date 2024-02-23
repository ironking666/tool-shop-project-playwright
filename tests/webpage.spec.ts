import { ContactPage } from '../src/pages/contact.page';
import { HandToolsPage } from '../src/pages/hand-tools.page';
import { HomePage } from '../src/pages/home.page';
import { LoginPage } from '../src/pages/login.page';
import { OtherToolsPage } from '../src/pages/other-tools.page';
import { PowerToolsPage } from '../src/pages/power-tools.page';
import { RentalsPage } from '../src/pages/rentals.page';
import { SpecialToolsPage } from '../src/pages/special-tools.page';
import { expect, test } from '@playwright/test';

test.describe('Verify service main pages', () => {
  test('home page verify @REQ-01-01', async ({ page }) => {
    const homePage = new HomePage(page);
    const expectedTitle = 'Practice Software Testing - Toolshop';
    await homePage.goto();

    const title = await homePage.title();
    expect(title).toContain(expectedTitle);
  });
  test.afterAll(async ({ page }) => {
    await page.close();
  });

  test('login page verify @REQ-01-02', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await expect(loginPage.loginForm).toBeVisible();
  });

  test('contact page verify @REQ-01-03', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();

    await expect(contactPage.contactForm).toBeVisible();
  });
  test('hand tools page verify @REQ-01-04', async ({ page }) => {
    const handToolsPage = new HandToolsPage(page);
    await handToolsPage.goto();

    await expect(handToolsPage.handToolsHeading).toBeVisible();
  });
  test('power tools page verify @REQ-01-05', async ({ page }) => {
    const powerToolsPage = new PowerToolsPage(page);
    await powerToolsPage.goto();

    await expect(powerToolsPage.powerToolsHeading).toBeVisible();
  });
  test('other tools page verify REQ-01-06', async ({ page }) => {
    const otherToolsPage = new OtherToolsPage(page);
    await otherToolsPage.goto();
    await expect(otherToolsPage.otherToolsHeading).toBeVisible();
  });
  test('special tools page verify @REQ-01-07', async ({ page }) => {
    const specialToolsPage = new SpecialToolsPage(page);
    await specialToolsPage.goto();

    await expect(specialToolsPage.specialToolsHeading).toBeVisible();
  });
  test('category rentals page verify @REQ-01-08', async ({ page }) => {
    const rentalsPage = new RentalsPage(page);
    await rentalsPage.goto();

    await expect(rentalsPage.rentalsHeading).toBeVisible();
  });
});
