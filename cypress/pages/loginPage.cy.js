/// <reference types="cypress" />     

import pageURL from '../fixtures/pageUrl.json'
import xpathLocators from '..//fixtures/xpathLocators.json'
var Identity = require('fake-identity');

class loginPage{


  enterCredentials(username,password){
  
    //Test Case 1: Test app when user inputs incorrect username should show invalid credential and not proceed with loginPage.
    
    //Check alert box not showing
    cy.xpath(xpathLocators.loginPage.alert).should('not.exist')
    
    //Check required prompt for username and password
    cy.xpath(xpathLocators.loginPage.button).click().then(()=>{
      cy.xpath(xpathLocators.loginPage.requiredprompt+'[1]').should('be.visible').and('have.text','Required')
      cy.xpath(xpathLocators.loginPage.requiredprompt+'[2]').should('be.visible').and('have.text','Required')
      cy.screenshot('Login-RequiredPrompt')
    })

    //Locate username element
    cy.xpath(xpathLocators.loginPage.username)
    .should('be.visible')
    //clear values just in case there are text in the username field
    .clear()
    //type the non existing username
    .type(username+"random")
    .should('have.value',username+"random")
    
    cy.xpath(xpathLocators.loginPage.button).should('exist').click()
    //Required prompt should only show for password
    cy.xpath(xpathLocators.loginPage.button).click().then(()=>{
      cy.xpath(xpathLocators.loginPage.requiredprompt+'[1]').should('be.visible').and('have.text','Required')
      cy.xpath(xpathLocators.loginPage.requiredprompt+'[2]').should('not.exist')
    })
      
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

    //Check alert box showing with alert Invalid credentials
    cy.xpath(xpathLocators.loginPage.alert).should('be.visible').and('have.text','Invalid credentials')

    //Required prompt should show again for both fields
    cy.xpath(xpathLocators.loginPage.button).click().then(()=>{
      cy.xpath(xpathLocators.loginPage.requiredprompt+'[1]').should('be.visible').and('have.text','Required')
      cy.xpath(xpathLocators.loginPage.requiredprompt+'[2]').should('be.visible').and('have.text','Required')
    })
    
    //Validate it proceed to dashboard page upon unsuccessful login. 
    cy.url().should('not.eq',pageURL.dashboardURL)

    //Test Case 2: Test app when user inputs incorrect password should show invalid credentials and not proceed with login.
    

    //Locate password element
    cy.xpath(xpathLocators.loginPage.password)
    .should('be.visible')
    //clear values just in case there are text in the password field
    .clear()
    //type a incorrect password
    .type(password+"incorrect")
    .should('have.value',password+"incorrect")

    cy.xpath(xpathLocators.loginPage.button).should('exist').click()
    //Required prompt should only show for username
    cy.xpath(xpathLocators.loginPage.button).click().then(()=>{
      cy.xpath(xpathLocators.loginPage.requiredprompt+'[1]').should('be.visible').and('have.text','Required')
      cy.xpath(xpathLocators.loginPage.requiredprompt+'[2]').should('not.exist')
    })


    //Locate username element
    cy.xpath(xpathLocators.loginPage.username)
    .should('be.visible')
    //clear values just in case there are text in the username field
    .clear()
    //type a existing username
    .type(username)
    .should('have.value',username)

    //Press login button
    cy.xpath(xpathLocators.loginPage.button).should('exist').click()

    //Check alert box showing with alert Invalid credentials
    cy.xpath(xpathLocators.loginPage.alert).should('be.visible').and('have.text','Invalid credentials')

    //Required prompt should show again for both fields
    cy.xpath(xpathLocators.loginPage.button).click().then(()=>{
      cy.xpath(xpathLocators.loginPage.requiredprompt+'[1]').should('be.visible').and('have.text','Required')
      cy.xpath(xpathLocators.loginPage.requiredprompt+'[2]').should('be.visible').and('have.text','Required')
    })

    //Validate it proceed to dashboard page upon unsuccessful login. 
    cy.url().should('not.eq',pageURL.dashboardURL)

    //Test Case 3: Test app when user inputs correct username and password should not show invalid credentials and proceed with login.
    

    //Check alert box not showing when reload
    cy.reload()
    cy.xpath(xpathLocators.loginPage.alert).should('not.exist')
    
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

    cy.xpath(xpathLocators.loginPage.requiredprompt+'[1]').should('not.exist')
    cy.xpath(xpathLocators.loginPage.requiredprompt+'[2]').should('not.exist')
    
    //Press login button
    cy.xpath(xpathLocators.loginPage.button).should('exist').click()

    //Check alert box showing with alert Invalid credentials
    cy.xpath(xpathLocators.loginPage.alert).should('not.exist')
   
    //Validate it proceed to dashboard page upon unsuccessful login. 
    cy.url().should('eq',pageURL.dashboardURL)

  }


  validateLoginPage(){
  


    //Validate header title is loaded already
    cy.xpath(xpathLocators.loginPage.title).should('be.visible')

    //Validate actual login url vs expected login url
    cy.url().should('eq',pageURL.loginURL)


    //Validate actual login title page vs expected login title page
    cy.title().should('eq',pageURL.loginTitle)

  }


  login(username,password){

    this.validateLoginPage();
    this.enterCredentials(username,password);

  }


  createLoginDetails(){
      
    //Variables for generating dummy data for creating new login details
    let generateFakeDetails = Identity.generate()
    let generateUsername = generateFakeDetails.firstName + generateFakeDetails.lastName + Math.floor(Math.random() * 100)
    let generatePassword = generateUsername + 'A!'

    //Test Case 4: Should not be able to create new login details when mandatory fields have no value
    cy.url().should('eq',pageURL.dashboardURL)
    cy.xpath(xpathLocators.PIMPage.PIMTab).click()
    cy.url().should('eq',pageURL.PIMURL)
    cy.xpath(xpathLocators.PIMPage.addEmployee).click()
    cy.xpath(xpathLocators.PIMPage.employeeID).type(Math.floor(Math.random() * 1000))
    cy.xpath(xpathLocators.PIMPage.submitButton).click().wait(1500)
    cy.xpath(xpathLocators.PIMPage.requiredprompt+'[1]').should('be.visible')
    cy.xpath(xpathLocators.PIMPage.requiredprompt+'[2]').should('be.visible')

    cy.xpath(xpathLocators.PIMPage.firstName).type(generateFakeDetails.firstName).then(() => {
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[1]').should('be.visible')
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[2]').should('not.exist')
        })
    cy.xpath(xpathLocators.PIMPage.lastName).type(generateFakeDetails.lastName).then(() => {
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[1]').should('not.exist')
      cy.xpath(xpathLocators.PIMPage.requiredprompt+'[2]').should('not.exist')
        })

    //Test Case 5: Should able to create new login details when mandatory fields have values
    cy.xpath(xpathLocators.PIMPage.createLoginDetailscheckbox).click()
    cy.xpath(xpathLocators.PIMPage.username).type(generateUsername)
    cy.xpath(xpathLocators.PIMPage.password).type(generatePassword)
    cy.xpath(xpathLocators.PIMPage.confirmPassword).type(generatePassword)
    cy.xpath(xpathLocators.PIMPage.submitButton).click().then(() => {
      return   cy.url().should('include', pageURL.afterLoginDetails)
      })
    
    cy.xpath(xpathLocators.dashboardPage.nameHeader).should('have.text',`${generateFakeDetails.firstName} ${generateFakeDetails.lastName}`)
    cy.xpath(xpathLocators.dashboardPage.profileDropdown).click().then(() => {
      cy.wait(1000)
      cy.xpath(xpathLocators.dashboardPage.logoutButton).click().wait(1000)
      })
    cy.loginAs(generateUsername,generatePassword)
    cy.xpath(xpathLocators.dashboardPage.profileDropdown).should('have.text',`${generateFakeDetails.firstName} ${generateFakeDetails.lastName}`)
  

  }
    
  }
  export default loginPage;