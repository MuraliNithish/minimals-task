import { test } from '@playwright/test';
import loginData from '../fixtures/login.json';
import { LoginPage } from '../pages/loginPage';
import { ChatPage } from '../pages/chatPage';
import { DashboardPage } from '../pages/dashBoardPage';
test('Login and perform full user actions', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const chatPage = new ChatPage(page);
  await loginPage.goto();
  await loginPage.signIn(loginData.user, loginData.password);

  await dashboard.navigateToAccount();
  await dashboard.accessBilling();
  await dashboard.openUser('Jayvion Simon', 'Deja Brady');
  await dashboard.selectCardByText('**** **** **** 1234');
  await dashboard.upgradePlan();
  await dashboard.navigateToListAndSearch('#60111', 'cor');
  await dashboard.applyFilters();
  await chatPage.sendMessageToUser('Deja Brady', 'Hello, how are you?');
  await dashboard.deleteFiles();

  await page.pause();
});
