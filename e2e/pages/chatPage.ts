import { Page } from '@playwright/test';
export class ChatPage {
  constructor(private page: Page) {}
  async sendMessageToUser(userName: string, message: string) {
    //Chat
    await this.page.locator('a[aria-label="Chat"]').click();
    await this.page.waitForTimeout(1000); 
    await this.page.locator('div[role="button"]').filter({ hasText: userName }).first().click();
    await this.page.waitForTimeout(1000); 
    const messageInput = this.page.getByRole('textbox', { name: 'Type a message' });
    await messageInput.click();
    await this.page.waitForTimeout(500); 
    await messageInput.type(message, { delay: 100 }); 
    await this.page.waitForTimeout(500); 
    await messageInput.press('Enter');
    await this.page.waitForTimeout(500); 
  }
}
