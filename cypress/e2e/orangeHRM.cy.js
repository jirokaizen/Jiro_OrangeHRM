import loginPageMethod from '../pages/loginPage.cy'
import buzzPageMethod from '../pages/buzzPage.cy'
import myInfoPageMethod from '../pages/myInfoPage.cy'

const loginPage = new loginPageMethod();
const buzzPage = new buzzPageMethod();
const myInfoPage = new myInfoPageMethod();


describe('Jiro Capstone', () => {


      beforeEach(function(){

        cy.log("Visit landing page of the website")
        cy.viewport('macbook-15')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('userInputs').then(function(userInputs){
          this.userInputs = userInputs;
        })
      })


    it.skip('Scenario 1: Login and Create New Login Details', function()  {


        //Test Case 1: Test app when user inputs incorrect username should show invalid credential and not proceed with login.
        //Test Case 2: Test app when user inputs incorrect password should show invalid credentials and not proceed with login.
        //Test Case 3: Test app when user inputs correct username and password should not show invalid credentials and proceed with login.

        //Custom method to validate TC1-TC3
        loginPage.login(this.userInputs.admin.username,this.userInputs.admin.password)

        //Test Case 4: Validate admin user can create new login details

        //Custom method to validate TC4
        loginPage.createLoginDetails()
        
    })

    it.skip('Scenario 2: Post Photos on Newsfeed (File Upload Scenario)', function()  {

      //Test Case 1: Should be able to upload GIF photo
      //Test Case 2: Should be able to upload PNG photo
      //Test Case 3: Should be able to upload JGP/JGEP photo
      //Test Case 4: Should be able to upload multiple photos
      //Test Case 5: Should NOT be able to upload other file formats aside from 'gif', 'png', 'jpg', 'jpeg'

      cy.loginAs(this.userInputs.admin.username,this.userInputs.admin.password)
      
      //Custom method to validate TC1 - TC5
      buzzPage.uploadPhotos(this.userInputs.images.gif,this.userInputs.images.png,this.userInputs.images.jpg,this.userInputs.images.tiff,this.userInputs.images.svg)

      
  })

  it('Scenario 3: myInfo Add and Remove Details', function()  {

    //Test Case 1: Should be able to add Emergency Contacts
    //Test Case 2: Should be able to remove Emergency Contacts

    cy.loginAs(this.userInputs.admin.username,this.userInputs.admin.password)
    
    //Custom method to validate TC1 and TC2
    myInfoPage.addEmergencyContacts()

    //Custom method to validate TC2
    //myInfoPage.removeEmergencyContacts()

    
})

  
  })