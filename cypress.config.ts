import { defineConfig } from "cypress";
const { allureCypress } = require("allure-cypress/reporter");
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/dist/plugin';



export default defineConfig({
  projectId: 'xoe2cv',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl: "https://www.initialyze.com", // use here or in script setting "--config baseurl" flag, but here it is taken as priority
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      // allure cypress
      allureCypress(on);
      return getCompareSnapshotsPlugin(on, config);
     
      
    },
  },
});
