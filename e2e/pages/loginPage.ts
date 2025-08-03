import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
    const signIn = this.page.locator('xpath=//*[@id="root__layout"]/header/div[2]/div[2]/a[1]');
    await signIn.waitFor();
    await signIn.click();
  }

  async signIn(email: string, password: string) {
    await this.page.locator('input[name="email"]').fill(email);
    await this.page.locator('input[name="password"]').fill(password);
    const loginButton = this.page.locator('xpath=//*[@id="root__layout"]/main/div[2]/div/form/div/button');
    await loginButton.click();
    await loginButton.waitFor();
  }
}
