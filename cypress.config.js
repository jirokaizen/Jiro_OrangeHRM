const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Jiro_OrangeHRM',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  watchForFileChanges: false,
  e2e: {
    defaultCommandTimeout: 25000,
    pageLoadTimeout: 25000,
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },
});