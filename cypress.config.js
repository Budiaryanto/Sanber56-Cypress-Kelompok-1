const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 768,
    viewportWidth: 1366,
    defaultCommandTimeout: 8000,
    screenshotOnRunFailure: false,
    pageLoadTimeout: 120000
  },
});