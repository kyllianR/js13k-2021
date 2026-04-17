import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './testsF',
  use: {
    baseURL: 'http://localhost:3000',
    browserName: 'chromium',
  },
});
