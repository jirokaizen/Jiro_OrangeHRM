import loginPageMethod from '../pages/loginPage.cy'
import buzzPageMethod from '../pages/buzzPage.cy'

const loginPage = new loginPageMethod();
const buzzPage = new buzzPageMethod();

describe('Jiro Capstone', () => {

    before(function(){
        cy.log("Visit landing page of the website")
        cy.viewport('macbook-15')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //access fixture data
        cy.fixture('userInputs').then(function(userInputs){
          this.userInputs = userInputs;
        })
      })

      beforeEach(function(){

        cy.log("Visit landing page of the website")
        cy.viewport('macbook-15')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      })


    it.skip('Scenario 1: Login and Create New Login Details', function()  {


        //Test Case 1: Test app when user inputs incorrect username should show invalid credential and not proceed with login.
        //Test Case 2: Test app when user inputs incorrect password should show invalid credentials and not proceed with login.
        //Test Case 3: Test app when user inputs correct username and password should not show invalid credentials and proceed with login.

        //Custom method to validate TC1-TC3
        loginPage.login(this.userInputs.loginUsername,this.userInputs.loginPassword)

        //Test Case 4: Validate admin user can create new login details

        //Custom method to validate TC4
        loginPage.createLoginDetails()
        
    })

    it('Scenario 2: Post Photos on Newsfeed (File Upload Scenario)', function()  {

      //Test Case 1: Should be able to upload GIF photo
      //Test Case 2: Should be able to upload PNG photo
      //Test Case 3: Should be able to upload JGP/JGEP photo
      //Test Case 4: Should be able to upload multiple photos
      //Test Case 5: Should NOT be able to upload other file formats aside fromm 'gif', 'png', 'jpg', 'jpeg'

      //Custom method to validate TC1-TC3
      buzzPage.uploadPhotos()



      //Test Case 4: Validate admin user can create new login details

      //Custom method to validate TC4



      
  })
  })