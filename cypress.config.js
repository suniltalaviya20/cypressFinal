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
  projectId: "vzz5xf",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    ignoreVideos:true
  },
    e2e: {
    async setupNodeEvents(on, config) {                     //Used to listen to Cypress events (like before:browser:launch, task, etc.)
      require("cypress-mochawesome-reporter/plugin")(on);

      const envFile = config.env.configFile || "QA_Env";
      const fileConfig = await getConfigurationFileByName(envFile);

      config.env = {
        ...fileConfig.env,   // values from your QA_Env.json
        ...config.env,       // CLI --env values win (grep, configFile, etc.)
      };

      // Merge any other top-level config keys (baseUrl, etc.) from the file
      const { env: _, ...otherFileConfig } = fileConfig;
      Object.assign(config, otherFileConfig);

      
      require("@cypress/grep/src/plugin")(config);    //required for implimentation of tags

      return config;
    },
    specPattern: "cypress/testCases/**/*.cy.{js,jsx,ts.tsx}",
    fixturesFolder: "cypress/testData",
    screenshotsFolder: "cypress/report/html/screenshots",
  },

});
