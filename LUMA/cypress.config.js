const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    defaultCommandTimeout:7000,
    reporter:"mochawesome",
reporterOptions:{
    charts:true,
    overwrite:false,
    html:false,
    json:true,
    reportDir:"cpyress/reports"
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
  },
});
