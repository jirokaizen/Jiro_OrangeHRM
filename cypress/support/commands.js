import pageURL from '../fixtures/pageUrl.json'
import xpathLocators from '..//fixtures/xpathLocators.json'

Cypress.Commands.add("loginAs", (username,password) => {

      //Locate username element
      cy.xpath(xpathLocators.loginPage.username)
      .should('be.visible')
      //clear values just in case there are text in the username field
      .clear()
      //type a existing username
      .type(username)
      .should('have.value',username)
  
      //Locate password element
      cy.xpath(xpathLocators.loginPage.password)
      .should('be.visible')
      //clear values just in case there are text in the password field
      .clear()
      //type the correct password
      .type(password)
      .should('have.value',password)
  
      //Press login button
      cy.xpath(xpathLocators.loginPage.button).should('exist').click()
       
      //Validate it proceed to dashboard page upon unsuccessful login. 
      cy.url().should('eq',pageURL.dashboardURL)
  
});

