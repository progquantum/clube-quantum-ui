import { defineConfig } from 'cypress';

export default defineConfig({
  screenshotOnRunFailure: true,
  video: false,
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
