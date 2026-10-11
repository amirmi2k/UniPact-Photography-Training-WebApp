import { test, expect } from '@playwright/test';

test.describe('UniPact Wedding Portfolio E2E Tests', () => {

  test('Page loads with title, hero headline and navigation', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/UNIPACT/);

    // Check Hero headline
    const headline = page.locator('.hero-headline');
    await expect(headline).toBeVisible();
    await expect(headline).toContainText('Preserving');

    // Check brand logo in header
    await expect(page.locator('.brand-title')).toHaveText('UNIPACT');
  });

  test('Curated gallery filters and opens lightbox modal with camera metadata', async ({ page }) => {
    await page.goto('/');

    // Scroll to gallery
    await page.locator('#gallery').scrollIntoViewIfNeeded();

    // Check category tabs exist
    const tabs = page.locator('.tab-btn');
    await expect(tabs).toHaveCount(5);

    // Filter by "The Sacred Vows"
    await page.getByRole('button', { name: 'The Sacred Vows' }).click();
    await page.waitForTimeout(300);

    // Cards should match category
    const cards = page.locator('.gallery-card');
    await expect(cards).toHaveCount(3);

    // Click the first photo card to open Lightbox
    await cards.first().click();

    // Verify lightbox is visible with EXIF metadata
    const lightbox = page.locator('.lightbox-overlay');
    await expect(lightbox).toBeVisible();
    await expect(page.locator('.details-title')).toBeVisible();
    await expect(page.locator('.details-exif-chips')).toBeVisible();

    // Close lightbox via ESC key
    await page.keyboard.press('Escape');
    await expect(lightbox).not.toBeVisible();
  });

  test('Clicking a collection pre-selects it in the contact questionnaire', async ({ page }) => {
    await page.goto('/');

    // Scroll to pricing section
    await page.locator('#investment').scrollIntoViewIfNeeded();

    // Click "Reserve The Full Wedding Story"
    const featuredCardBtn = page.getByRole('button', { name: /Reserve The Full Wedding Story/i });
    await expect(featuredCardBtn).toBeVisible();
    await featuredCardBtn.click();

    // Verify scrolled to contact and select value updated
    await expect(page.locator('#contact')).toBeVisible();
    const select = page.locator('#packageId');
    await expect(select).toHaveValue('full-story');
  });

  test('Submitting the inquiry form displays the celebration confirmation card', async ({ page }) => {
    await page.goto('/');

    // Fill form fields
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.locator('#names').fill('Claire & Laurent');
    await page.locator('#email').fill('claire.laurent@example.com');
    await page.locator('#date').fill('October 12, 2026');
    await page.locator('#venue').fill('Villa d\'Este, Lake Como');
    await page.locator('#howMet').fill('Met at a jazz bar in Montmartre on a rainy Thursday.');
    await page.locator('#vision').fill('Intimate candlelight dinner under olive branches.');

    // Submit
    await page.getByRole('button', { name: /Request Availability & Proposal/i }).click();

    // Verify celebratory confirmation card
    const successCard = page.locator('.success-state-card');
    await expect(successCard).toBeVisible();
    await expect(page.locator('.success-title')).toContainText('Your Story Has Been Received');
    await expect(page.locator('.success-desc')).toContainText('Claire & Laurent');
  });

});
