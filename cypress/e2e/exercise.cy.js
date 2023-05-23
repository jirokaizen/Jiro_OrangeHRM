describe('wrap example',()=>{

    it.skip('test case 1',()=>{
        cy.visit('https://admin-demo.nopcommerce.com/login')


        
        cy.get('#Email')
        .invoke('attr', 'data-val-required')
        .then((attributeValue) => {
            cy.wrap(attributeValue).should('eq', 'Please enter your email')
        }
        )

        cy.get('#Email')
        .invoke('attr', 'value')
        .then((attributeValue) => {
            cy.wrap(attributeValue).should('eq', 'admin@yourstore.com')
        }
        )

        cy.get('#Password')
            .then((ele) => {
                cy.wrap(ele).invoke('attr', 'value')
                .should('eq', 'admin')
            }
        )
        
        cy.get("button[type='submit']").click()

        cy.visit('https://admin-demo.nopcommerce.com/Admin/Customer/List')


    })


    it('test case 2', ()=>{

        cy.fixture('userInputs2').then(function(userInputs2){
            this.userInputs2 = userInputs2;
            cy.visit('https://admin-demo.nopcommerce.com/login')
            cy.get("form[method='post']").then(attr => {
                cy.wrap(attr)
                .find('#Email').clear().type(this.userInputs2.em)
    
                cy.wrap(attr)
                .find('#Password').clear().type(this.userInputs2.ps)
    
                cy.wrap(attr)
                .find('button').click()

            
          })

       
            

        })






    })



})