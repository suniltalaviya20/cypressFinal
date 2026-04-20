# Cypress Automation Project

This repository contains a Cypress test automation framework for UI and API testing, including reusable page objects, environment configuration, custom commands, and reporting.

## Project Overview

- Cypress version: `^13.12.0`
- Framework type: Cypress E2E tests with page object pattern
- Includes UI tests and API tests
- Uses environment configuration files under `cypress/env`
- Supports tag filtering with `@cypress/grep`
- Generates Mochawesome reports via `cypress-mochawesome-reporter`

## Prerequisites

- Node.js installed (recommended Node 18+)
- npm available globally

## Install Dependencies

From the repository root:

```bash
npm install
```

## Run Tests

### Run Cypress via npm script

```bash
npm test
```

### Run Cypress headed mode

```bash
npm run headTest
```

### Run smoke tests via grep tags

```bash
npm run test:smoke
```

### Use the project runner script

The repository includes a custom runner script `run-cypress.js`.

Default invocation:

```bash
node run-cypress.js
```

Custom arguments:

```bash
node run-cypress.js <configFile> <specFolderPath> <tag>
```

Example:

```bash
node run-cypress.js QA_Env "cypress/testCases/UI-tests" "@smoke"
```

Notes:
- `configFile` maps to a JSON file in `cypress/env`, such as `QA_Env` -> `cypress/env/QA_Env.json`
- `specFolderPath` should point to the Cypress spec path
- `tag` is optional and passed to the grep plugin

## Configuration

Environment configuration files are stored in `cypress/env`.

Example file:

- `cypress/env/QA_Env.json`

It contains values such as:

- `TenantUrl`
- `TenantApi`
- `userName`
- `password`
- `key`

## Folder Structure

- `cypress/`
  - `env/` - Environment JSON files for config values
  - `pages/`
    - `enums/` - Text constants and page enums
    - `pagemethods/` - Page object methods
    - `pageobjects/` - Locator definitions
  - `report/` - Generated screenshots and report artifacts
  - `reports/` - Mochawesome HTML report output
  - `requests/` - API request helper files
  - `support/` - Cypress support files and custom commands
  - `testCases/`
    - `API-tests/` - API-related Cypress specs
    - `UI-tests/` - UI-related Cypress specs
  - `testData/` - Fixture data files
- `cypress.config.js` - Cypress configuration and plugin setup
- `package.json` - Project dependencies and npm scripts
- `run-cypress.js` - Custom runner script

## Test Data

Fixtures are stored under `cypress/testData` and are loaded using `cy.fixture()` in tests.

## Reporting

- Mochawesome reports are generated in `cypress/reports/html`
- Screenshots are saved to `cypress/report/html/screenshots`

## Notes

- `cypress/support/commands.js` defines reusable custom Cypress commands.
- `cypress/support/e2e.js` imports commands and registers plugins.
- The custom config loader in `cypress.config.js` merges JSON environment values with CLI `--env` values.

## Useful Commands

```bash
npm install
npm test
npm run headTest
npm run test:smoke
node run-cypress.js QA_Env "cypress/testCases/UI-tests" "@smoke"
```
