import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';



/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
//require('dotenv').config()

/**
 * See https://playwright.dev/docs/test-configuration.
 */

// Alternatively, read from "../my.env" file.
const runHeadless = process.env.CI ? true : false;

const config: PlaywrightTestConfig = {
  testDir: './playwright/tests',
  /* Maximum time one test can run for. */
  timeout: 1200 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 60000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    timezoneId: 'UTC',
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',
    screenshot: 'on',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        headless: runHeadless,
        ...devices['Desktop Chrome'],
        channel: 'chromium',
        permissions: ['notifications'],
        // timezoneId: 'UTC',
        deviceScaleFactor: 1,
        video: {
          mode: 'on',
          size: { width: 1280, height: 720 }
        },
        trace: 'on', // Optional: Enables tracing along with video
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        permissions: ['permissions.default.desktop-notification'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },





};

export default config;
