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
import pageURL from '../fixtures/pageUrl.json'
import xpathLocators from '..//fixtures/xpathLocators.json'
import 'cypress-file-upload';

Cypress.Commands.add("loginAsAdmin", () => {

      //Locate username element
      cy.xpath(xpathLocators.loginUsername)
      .should('be.visible')
      //clear values just in case there are text in the username field
      .clear()
      //type a existing username
      .type('Admin')
      .should('have.value','Admin')
  
      //Locate password element
      cy.xpath(xpathLocators.loginPassword)
      .should('be.visible')
      //clear values just in case there are text in the password field
      .clear()
      //type the correct password
      .type('admin123')
      .should('have.value','admin123')
  
      //Press login button
      cy.xpath(xpathLocators.loginButton).should('exist').click()
       
      //Validate it proceed to dashboard page upon unsuccessful login. 
      cy.url().should('eq',pageURL.dashboardURL)
  
});

