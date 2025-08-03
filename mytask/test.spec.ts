import { test, expect, Browser, Page } from '@playwright/test';
import { firefox } from 'playwright';

test('minimals test', async () => {
  const browser: Browser = await firefox.launch({ headless: false });
  const page: Page = await browser.newPage();

  await page.goto("https://minimals.cc");
  console.log("test....");

  const signInButton = page.locator('xpath=//*[@id="root__layout"]/header/div[2]/div[2]/a[1]');
  await signInButton.waitFor();
  await signInButton.click();

  await page.waitForSelector('input[name="email"]');
  await page.fill('input[name="email"]', 'demo@minimals.cc');
  await page.fill('input[name="password"]', '@2Minimal');

  const loginButton = page.locator('xpath=//*[@id="root__layout"]/main/div[2]/div/form/div/button');
  await loginButton.click();
      await loginButton.waitFor();

  await page.getByRole('button', { name: 'User' }).click();
const accountLink = page.getByRole('link', { name: 'Account' });
await accountLink.click();
const billingTab = page.getByRole('tab', { name: 'Billing' });
await billingTab.click();
const userButton = page.getByRole('button', { name: 'Jayvion Simon' });
await userButton.click();
await page.getByRole('button', { name: 'Deja Brady' }).click();
console.log("button.....")
await page.locator('div:has-text("**** **** **** 1234")').nth(7).click();
console.log("card..")
await page.getByRole('button', { name: 'Upgrade plan' }).click();
console.log("upgrade...")
await page.getByRole('button', { name: 'Order' }).click();
await page.locator('a[aria-label="List"]').nth(1).click();
await page.getByPlaceholder('Search customer or order number...').fill('cor');
await page.locator('tr', { hasText: '#60111' }).locator('input[type="checkbox"]').click();
await page.getByRole('button', { name: 'Job' }).click();
 await page.locator('a[aria-label="List"]').nth(1).click();
 const filtersButton = page.getByRole('button', { name: 'Filters' });
await filtersButton.waitFor(); 
await filtersButton.click();
await page.locator('input[id="On demand-checkbox"]').check();
await page.locator('button:has(svg.iconify--mingcute)').click();
await page.locator('a[aria-label="Chat"]').click();
await page.locator('div[role="button"]').filter({ hasText: 'Deja Brady' }).first().click();
const messageInput = page.getByRole('textbox', { name: 'Type a message' });
await messageInput.fill("Hello, how are you?" );
await messageInput.click();
await page.locator('#chat-message-input').press('Enter');
await page.getByRole('link', { name: 'File manager' }).click({force:true});
await page.getByRole('checkbox', { name: 'All row Checkbox' }).click({force:true});
await page.getByRole('button', { name: 'Delete' }).click({force:true});
await page.locator('//button[contains(text(), "Delete")]').click({force:true});
  await page.pause(); 
});
