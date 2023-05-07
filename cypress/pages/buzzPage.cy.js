/// <reference types="cypress" />     

import xpathLocators from '..//fixtures/xpathLocators.json'

class buzzPage{

    uploadPhotos(gif,png,jpg,tiff,svg){
       
        this.uploadGIF(gif)
        this.uploadJPG(jpg)
        this.uploadPNG(png)
        this.uploadMultiplePhotos(gif,png,jpg)
        this.uploadOtherFormats(tiff,svg)

    }

    uploadGIF(gif){
        cy.xpath(xpathLocators.buzzPage.buzzTab).click().wait(5000)

        //Test Case: Should able to upload GIF photo
        cy.xpath(xpathLocators.buzzPage.sharePhotos).click().then(()=>{
            cy.xpath(xpathLocators.buzzPage.shareText).type('Test Case: Should able to upload GIF photo').then(()=>{
                cy.get("input[type=file]").selectFile(gif, {
                    action: "select",
                    force: true,
                    })
            cy.xpath(xpathLocators.buzzPage.sharePhotosButton).click().wait(3000)   

            })

        //Check if post is posted successfully with the photo and caption we wrote.    
        cy.xpath(xpathLocators.buzzPage.bodyPostDashboard).should('contain','Test Case: Should able to upload GIF photo') 
        cy.get(':nth-child(1) > .oxd-sheet > :nth-child(2) > .orangehrm-buzz-post-body > .orangehrm-buzz-photos > .orangehrm-buzz-photos-item > .orangehrm-buzz-post-body-picture').should('exist')
         }) 
    }

    uploadPNG(png){
        cy.xpath(xpathLocators.buzzPage.buzzTab).click().wait(5000)

         //Test Case: Should able to upload PNG photo
         cy.xpath(xpathLocators.buzzPage.sharePhotos).click().then(()=>{
            cy.xpath(xpathLocators.buzzPage.shareText).type('Test Case: Should able to upload PNG photo').then(()=>{
                cy.get("input[type=file]").selectFile(png, {
                    action: "select",
                    force: true,
                    })
            cy.xpath(xpathLocators.buzzPage.sharePhotosButton).click().wait(3000)   

            })

        //Check if post is posted successfully with the photo and caption we wrote.    
        cy.xpath(xpathLocators.buzzPage.bodyPostDashboard).should('contain','Test Case: Should able to upload PNG photo') 
        cy.get(':nth-child(1) > .oxd-sheet > :nth-child(2) > .orangehrm-buzz-post-body > .orangehrm-buzz-photos > .orangehrm-buzz-photos-item > .orangehrm-buzz-post-body-picture').should('exist')
         })  
    }

    uploadJPG(jpg){
        cy.xpath(xpathLocators.buzzPage.buzzTab).click().wait(5000)

        //Test Case: Should able to upload JPG photo
        cy.xpath(xpathLocators.buzzPage.sharePhotos).click().then(()=>{
        cy.xpath(xpathLocators.buzzPage.shareText).type('Test Case: Should able to upload JPG photo').then(()=>{
            cy.get("input[type=file]").selectFile(jpg, {
                action: "select",
                force: true,
                })
        cy.xpath(xpathLocators.buzzPage.sharePhotosButton).click().wait(3000)   

        })

    //Check if post is posted successfully with the photo and caption we wrote.    
    cy.xpath(xpathLocators.buzzPage.bodyPostDashboard).should('contain','Test Case: Should able to upload JPG photo') 
    cy.get(':nth-child(1) > .oxd-sheet > :nth-child(2) > .orangehrm-buzz-post-body > .orangehrm-buzz-photos > .orangehrm-buzz-photos-item > .orangehrm-buzz-post-body-picture').should('exist')
        })
    }

    uploadMultiplePhotos(gif,png,jpg){
        cy.xpath(xpathLocators.buzzPage.buzzTab).click().wait(5000)

        //Test Case: Should able to upload multiple photos
        cy.xpath(xpathLocators.buzzPage.sharePhotos).click().then(()=>{
            cy.xpath(xpathLocators.buzzPage.shareText).type('Test Case: Should able to upload multiple photos').then(()=>{
                cy.get("input[type=file]").selectFile(jpg, {
                    action: "select",
                    force: true,
                    })
                cy.get("input[type=file]").selectFile(png, {
                    action: "select",
                    force: true,
                    })
                cy.get("input[type=file]").selectFile(gif, {
                    action: "select",
                    force: true,
                    })
            cy.xpath(xpathLocators.buzzPage.sharePhotosButton).click().wait(3000)   

            })

        //Check if post is posted successfully with the photo and caption we wrote.    
        cy.xpath(xpathLocators.buzzPage.bodyPostDashboard).should('contain','Test Case: Should able to upload multiple photos') 
        cy.get(':nth-child(1) > .oxd-sheet > :nth-child(2) > .orangehrm-buzz-post-body > .orangehrm-buzz-photos > .orangehrm-buzz-photos-item > .orangehrm-buzz-post-body-picture')
        .should(($lis) => {
            expect($lis).to.have.length(3)
            })
            })
    }

    uploadOtherFormats(tiff,svg){
        cy.xpath(xpathLocators.buzzPage.buzzTab).click().wait(5000)

        //Test Case: Should NOT able to upload other file formats
        cy.xpath(xpathLocators.buzzPage.sharePhotos).click().then(()=>{
        cy.xpath(xpathLocators.buzzPage.shareText).type('Test Case: Should able to upload JPG photo').then(()=>{
            cy.get("input[type=file]").selectFile(tiff, {
                action: "select",
                force: true,
                })


        })
        //Check alert box showing with alert Only 'gif', 'png', 'jpg', 'jpeg' type images are allowed!
        cy.xpath(xpathLocators.buzzPage.alert).should('be.visible').and('have.text',"Only 'gif', 'png', 'jpg', 'jpeg' type images are allowed!")


        })
        
        cy.reload()
        cy.xpath(xpathLocators.buzzPage.buzzTab).click().wait(5000)

        //Test Case: Should NOT able to upload other file formats
        cy.xpath(xpathLocators.buzzPage.sharePhotos).click().then(()=>{
        cy.xpath(xpathLocators.buzzPage.shareText).type('Test Case: Should able to upload JPG photo').then(()=>{
            cy.get("input[type=file]").selectFile(svg, {
                action: "select",
                force: true,
                })


        })
        //Check alert box showing with alert Only 'gif', 'png', 'jpg', 'jpeg' type images are allowed!
        cy.xpath(xpathLocators.buzzPage.alert).should('be.visible').and('have.text',"Only 'gif', 'png', 'jpg', 'jpeg' type images are allowed!")


        })    

        
    }
   
  
}
  export default buzzPage;