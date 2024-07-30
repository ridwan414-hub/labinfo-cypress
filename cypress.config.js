const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3001',
    env: {
      USER_NAME: 'poridhi@poridhi',
      PASSWORD: 'using_Poridhi@123#',
      BACKEND: 'http://localhost:3000/auth'
    }
  },
});
