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
  // e2e: {
  //    setupNodeEvents(on, config) {
    //   require('@cypress/grep/src/plugin')(config);
    //   require('cypress-mochawesome-reporter/plugin')(on);
      
    //   const envFile = config.env.configFile || "QA_Env";
    //   return getConfigurationFileByName(envFile);
    // },
    e2e: {
    async setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      const envFile = config.env.configFile || "QA_Env";
      const fileConfig = await getConfigurationFileByName(envFile);

      // ✅ Merge file config INTO existing config — preserves grep, grepTags, etc.
      config.env = {
        ...fileConfig.env,   // values from your QA_Env.json
        ...config.env,       // CLI --env values win (grep, configFile, etc.)
      };

      // Merge any other top-level config keys (baseUrl, etc.) from the file
      const { env: _, ...otherFileConfig } = fileConfig;
      Object.assign(config, otherFileConfig);

      // ✅ Register grep AFTER config.env is fully merged
      require("@cypress/grep/src/plugin")(config);

      return config;
    },
    specPattern: "cypress/testCases/**/*.cy.{js,jsx,ts.tsx}",
    fixturesFolder: "cypress/testData",
    screenshotsFolder: "cypressoutputfilesscreenshotFolder",
  },

});
