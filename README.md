# README

Follow these steps to integrate e2e test with cypress in the `labinfo-backend` and `labinfo-frontend` branches:

1. Git clone the repo and run `npm install`

2. create file `cypress.config.js` with

   `const { defineConfig } = require("cypress");

   module.exports = defineConfig({
   e2e: {
   setupNodeEvents(on, config) {
   // implement node event listeners here
   },
   env: {
   USER_NAME: '$YOUR_USER_NAME',
        PASSWORD: '$YOUR_PASSWORD',
   }
   },
   });`

3. To Test with ui command `npm run cypress:open` and in command line `npm run test:e2e`

4. Click 'E2E Testing' in cypress pop-up-window and select the file to run the test

5. Go to the `labinfo-backend/features/updated-lab-info-backend` branch and run the command `nodemon server.js` to start the backend server.

6. Switch to the `labinfo-frontend/features/integrate-google-oauth` branch and run `npm run dev` to start the frontend development server.

That's it! You have successfully integrated Google OAuth in your project.

any help: visit https://fullstackopen.com/en/part5/end_to_end_testing_cypress
