const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://ticketazo.com.ar/",
    //baseUrlAdmin:"https://vps-3696213-x.dattaweb.com/adminTable"
  },
  
});
