// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const CryptoJS = require("crypto-js");

Cypress.Commands.add("createToken", () => {
  const userName = Cypress.env("userName");
  const encryptedPassword = Cypress.env("password");
  const key = Cypress.env("key");

  if (!userName || !encryptedPassword || !key) {
    throw new Error("Missing environment variables: userName, password, or key!");
  }

  const password = CryptoJS.AES.decrypt(encryptedPassword, key).toString(CryptoJS.enc.Utf8);
  cy.request({
    method: "POST",
    url: "https://restful-booker.herokuapp.com/auth",
    body: { username: userName, password: password },
  }).then((response) => {
    expect(response.status).to.eq(200);
    Cypress.env("Auth", response.body.token);
  });
});

  