/// <reference types="cypress" />     

import pageURL from '../fixtures/pageUrl.json'
import xpathLocators from '..//fixtures/xpathLocators.json'
var Identity = require('fake-identity');

class buzzPage{

    uploadPhotos(){
      

        cy.loginAsAdmin()
        cy.xpath(xpathLocators.buzz).click().wait(5000)


        //Test Case 1: Should able to upload GIF photo
        cy.xpath(xpathLocators.sharePhotos).click().then(()=>{
            cy.xpath(xpathLocators.shareText).type('Test Case 1: Should able to upload GIF photo').then(()=>{
                cy.get("input[type=file]").selectFile("gif.gif", {
                    action: "select",
                    force: true,
                    })
            cy.xpath(xpathLocators.sharePhotosButton).click().wait(3000)   

            })

        //Check if post is posted successfully with the photo and caption we wrote.    
        cy.xpath(xpathLocators.bodyPostDashboard).should('contain','Test Case 1: Should able to upload GIF photo') 
        cy.get(':nth-child(1) > .oxd-sheet > :nth-child(2) > .orangehrm-buzz-post-body > .orangehrm-buzz-photos > .orangehrm-buzz-photos-item > .orangehrm-buzz-post-body-picture').should('exist')
         })
     
        //Test Case 2: Should able to upload PNG photo
        cy.xpath(xpathLocators.sharePhotos).click().then(()=>{
            cy.xpath(xpathLocators.shareText).type('Test Case 2: Should able to upload PNG photo').then(()=>{
                cy.get("input[type=file]").selectFile("png.png", {
                    action: "select",
                    force: true,
                    })
            cy.xpath(xpathLocators.sharePhotosButton).click().wait(3000)   

            })

        //Check if post is posted successfully with the photo and caption we wrote.    
        cy.xpath(xpathLocators.bodyPostDashboard).should('contain','Test Case 2: Should able to upload PNG photo') 
        cy.get(':nth-child(1) > .oxd-sheet > :nth-child(2) > .orangehrm-buzz-post-body > .orangehrm-buzz-photos > .orangehrm-buzz-photos-item > .orangehrm-buzz-post-body-picture').should('exist')
         })  

        //Test Case 3: Should able to upload JPEG photo
        cy.xpath(xpathLocators.sharePhotos).click().then(()=>{
            cy.xpath(xpathLocators.shareText).type('Test Case 3: Should able to upload JPEG photo').then(()=>{
                cy.get("input[type=file]").selectFile("jpg.jpeg", {
                    action: "select",
                    force: true,
                    })
            cy.xpath(xpathLocators.sharePhotosButton).click().wait(3000)   

            })

        //Check if post is posted successfully with the photo and caption we wrote.    
        cy.xpath(xpathLocators.bodyPostDashboard).should('contain','Test Case 3: Should able to upload JPEG photo') 
        cy.get(':nth-child(1) > .oxd-sheet > :nth-child(2) > .orangehrm-buzz-post-body > .orangehrm-buzz-photos > .orangehrm-buzz-photos-item > .orangehrm-buzz-post-body-picture').should('exist')
         })

        //Test Case 4: Should able to upload multiple photos

        //Test Case 5: Should NOT be able to upload other file formats aside fromm 'gif', 'png', 'jpg', 'jpeg'

    }


    
}
  export default buzzPage;