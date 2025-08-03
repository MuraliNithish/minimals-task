import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e/tests',
  timeout: 60000,
  testMatch: ['**/*.ts'],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://minimals.cc',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    actionTimeout: 10000,
  },
});
