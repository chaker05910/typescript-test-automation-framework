import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

const envPath = path.resolve(__dirname, '.env');
const envLocalPath = path.resolve(__dirname, '.env.local');
const envToLoad = fs.existsSync(envLocalPath) ? envLocalPath : envPath;
dotenv.config({ path: envToLoad });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './src/tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  use: {
    actionTimeout: 60000, // 60 seconds for actions like click, fill, etc.
    navigationTimeout: 15000, // 15 seconds for page navigation
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    launchOptions: process.env.CI? {
      args: [
        '--window-size=1920,1080',
        '--start-maximized'
      ],
    } : 
    {
      args: [
        '--start-maximized',
      ],
    },
    headless: process.env.CI ? true : false
  },
  timeout: 120000, // Maximum time for each test before marking it as failed (120 seconds)
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'msedge',
      use: {
        channel: 'msedge', // Use Microsoft Edge browser
        viewport: null, // Ensure the browser window starts maximized
      },
    },
    {
      name: 'chrome',
      use: {
        channel: 'chrome', // Use Google Chrome browser
        viewport: null, // Ensure the browser window starts maximized
      },
    },
    {
      name: 'firefox',
      use: {
        channel: 'firefox', // Use Firefox browser
        viewport: null, // Ensure the browser window starts maximized
      },
    },
    {
      name: 'webkit',
      use: {
        // Safari does not have an explicit "channel" parameter since it is supported via WebKit
        browserName: 'webkit', // Use WebKit to run tests in Safari
        viewport: null, // Ensure the browser window starts maximized
      },
    },
  ],
});
