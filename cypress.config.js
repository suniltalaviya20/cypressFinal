const { defineConfig } = require("cypress");
const path = require("path");
const fs = require("fs-extra");
function getConfigurationFileByName(env) {
  const fileLocation = path.resolve("cypress/env/", `${env}.json`);
  console.log(
    `BAT : Using ${env} config.  Set appropriate parameters here - cypress/config/${env}.json, otherwise the tests will fail.`
  );
  return fs.readJSON(fileLocation);
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    ignoreVideos:true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      const envFile = config.env.configFile || "QA_Env";
      return getConfigurationFileByName(envFile);
    },
    specPattern: "cypress/testCases/**/*.cy.{js,jsx,ts.tsx}",
    fixturesFolder: "cypress/testData",
    screenshotsFolder: "cypressoutputfilesscreenshotFolder",
  },
});
