import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { outputFolder: 'reports' }]],
  use: {
    headless: true,
    video: 'on',
    screenshot: 'on',
  },
});