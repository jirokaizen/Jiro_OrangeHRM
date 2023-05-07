/// <reference types="cypress" />     

import pageURL from '../fixtures/pageUrl.json'
import xpathLocators from '../fixtures/xpathLocators.json'
var Identity = require('fake-identity');

class myInfoPage{

  addEmergencyContacts(){
    cy.xpath(xpathLocators.myInfoPage.myInfotab).click().wait(5000)
    cy.xpath(xpathLocators.myInfoPage.emergencyContactstab).then(()=>{
      cy.get(':nth-child(3) > .orangehrm-tabs-item').scrollIntoView().click({ force: true })
      cy.scrollTo('top')
      cy.xpath(xpathLocators.myInfoPage.addEmergenyContactButton).scrollIntoView().click({ force: true })
      //Check alert prompt of required fields to be entered
      cy.xpath(xpathLocators.myInfoPage.submit).click({ force: true }).wait(1000)

      //Name field shows "Required" prompt
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[1]').should('be.visible').and('have.text','Required')

      //Relationship field shows "Required" prompt
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[2]').should('be.visible').and('have.text','Required')

      //Home Telephone field shows "At least one phone number is required" prompt
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[3]').should('be.visible').and('have.text','At least one phone number is required')

      //Variables for generating dummy data for creating new login details
      let generateFakeDetails = Identity.generate()
      let generateName = generateFakeDetails.firstName + ' ' + generateFakeDetails.lastName
      cy.scrollTo('top')


      //Enter Name
      cy.xpath(xpathLocators.myInfoPage.name).type(generateName)
      //Check alert prompt of required fields to be entered
      cy.xpath(xpathLocators.myInfoPage.submit).click({ force: true }).wait(1000)
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[1]').should('be.visible').and('have.text','Required')
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[2]').should('be.visible').and('have.text','At least one phone number is required')
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[3]').should('not.exist')

      //Enter Relationship
      cy.xpath(xpathLocators.myInfoPage.relationship).type("Parent")
      //Check alert prompt of required fields to be entered
      cy.xpath(xpathLocators.myInfoPage.submit).click({ force: true }).wait(1000)
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[1]').should('be.visible').and('have.text','At least one phone number is required')
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[2]').should('not.exist')
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[3]').should('not.exist') 
     
      //Enter Number
      cy.xpath(xpathLocators.myInfoPage.hometelephone).type("123")
      //Check alert prompt of required fields to be entered
      cy.xpath(xpathLocators.myInfoPage.submit).click({ force: true }).wait(1000)
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[1]').should('not.exist')
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[2]').should('not.exist')
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[3]').should('not.exist') 

      cy.scrollTo('top')

      cy.xpath(`//div[text()='${generateName}']`).should('be.visible')
      cy.xpath("(//i[@class='oxd-icon bi-trash'])[1]").click()
 
    })

  }

  removeEmergencyContacts(){

  }
 
  
  }
  export default myInfoPage;