import { Page } from '@playwright/test';
export class DashboardPage {
  constructor(private page: Page) {}
  async navigateToAccount() {
    await this.page.getByRole('button', { name: 'User' }).click();
    await this.page.getByRole('link', { name: 'Account' }).click();
  }
  async accessBilling() {
    await this.page.getByRole('tab', { name: 'Billing' }).click();
  }
  async openUser(sender: string, receiver: string) {
    await this.page.getByRole('button', { name: sender }).click();
    await this.page.getByRole('button', { name: receiver }).click();
  }
 async selectCardByText(cardText: string) {
  const card = this.page.getByText(cardText, { exact: false }).first(); 
  await card.waitFor();
  await card.click();
}
  async upgradePlan() {
    await this.page.getByRole('button', { name: 'Upgrade plan' }).click();
    await this.page.getByRole('button', { name: 'Order' }).click();
  }
  async navigateToListAndSearch(orderId: string, searchText: string) {
    await this.page.locator('a[aria-label="List"]').nth(1).click();
    await this.page.getByPlaceholder('Search customer or order number...').fill(searchText);
    await this.page.locator(`tr:has-text("${orderId}")`).locator('input[type="checkbox"]').click();
    await this.page.getByRole('button', { name: 'Job' }).click();
    await this.page.locator('a[aria-label="List"]').nth(1).click();
  }
  async applyFilters() {
    const filters = this.page.getByRole('button', { name: 'Filters' });
    await filters.waitFor();
    await filters.click();
    await this.page.locator('input[id="On demand-checkbox"]').check();
    await this.page.locator('button:has(svg.iconify--mingcute)').click();
  }
  async deleteFiles() {
    await this.page.getByRole('link', { name: 'File manager' }).click({ force: true });
    await this.page.getByRole('checkbox', { name: 'All row Checkbox' }).click({ force: true });
    await this.page.getByRole('button', { name: 'Delete' }).click({ force: true });
    await this.page.locator('//button[contains(text(), "Delete")]').click({ force: true });
  }
}
