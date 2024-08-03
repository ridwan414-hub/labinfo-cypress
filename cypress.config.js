const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      USER_NAME: 'poridhi@poridhi',
      PASSWORD: 'using_Poridhi@123#',
    }
  },
});
