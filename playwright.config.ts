import { defineConfig, devices } from '@playwright/test'

// Runs against the production build, because that is what readers get.
export default defineConfig({
  testDir: 'tests/e2e',
  reporter: 'list',
  use: { ...devices['Desktop Chrome'], baseURL: 'http://localhost:4188/hello-llm/' },
  webServer: {
    command: 'npm run docs:build && npm run docs:preview -- --port 4188',
    url: 'http://localhost:4188/hello-llm/',
    timeout: 180_000,
    reuseExistingServer: false,
  },
})
