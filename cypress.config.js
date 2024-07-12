const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    username : "testUsername",
    password : "testPassword",
    baseURL : "www.stackadapt.com"
}
});
