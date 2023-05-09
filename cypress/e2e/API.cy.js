
describe('Jiro Capstone', () => {

const randomRepoName = 'Jiro' + Math.floor(Math.random() * 100000)


beforeEach(function(){

  cy.fixture('git').then(function(git){
    this.git = git;
  })

})

it('TC1: Create a repository for the authenticated user', function()  {

  cy.request({
      method: 'POST', 
      url: this.git.url, 
      headers:{
        Authorization: 'Bearer ' + this.git.token,
        accept: 'application/json'
      },
      body: {
        name: randomRepoName
      }
    }).then( (result) => {

      const responseBody = result.body

      expect(responseBody.owner.login).eq(this.git.login)
      expect(responseBody.owner.id).eq(this.git.id)
      expect(responseBody.name).eq(randomRepoName)
      expect(result.status).eq(201)
      expect(result.headers).to.include({
        'content-type': 'application/json; charset=utf-8',
        location: `https://api.github.com/repos/${this.git.login}/${randomRepoName}`
      })
      expect(result.duration).to.not.be.greaterThan(2000)   
    })
    
})

it('TC2: List previous created repository for the authenticated user', function()  {

  cy.request({
      method: 'GET', 
      url: `https://api.github.com/repos/${this.git.login}/${randomRepoName}`,
      headers:{
        Authorization: 'Bearer ' + this.git.token,
        accept: 'application/json'
      }

    }).then( (result) => {

      let responseBody = result.body
      expect(result.status).eq(200)
      expect(responseBody.owner.login).eq(this.git.login)
      expect(responseBody.owner.id).eq(this.git.id)
      expect(responseBody.name).eq(randomRepoName)
      expect(result.headers).to.include({
        'content-type': 'application/json; charset=utf-8'
      })
      expect(result.duration).to.not.be.greaterThan(2000)   

    })
    
})

it('TC3: List university as per Country', function()  {

  cy.request({
      method: 'GET', 
      url: 'http://universities.hipolabs.com/search?country=philippines',
      headers:{
        accept: 'application/json'
      }

    }).then( (result) => {

      let responseBody = result.body
      expect(result.status).eq(200)


       expect(responseBody[0].country).eq(this.git.country)
       expect(responseBody[0].name).eq(this.git.school)
       expect(responseBody[0].alpha_two_code).eq(this.git.alpha_two_code)


       expect(result.headers).to.include({
       'content-type': 'application/json'
    })
    expect(result.duration).to.not.be.greaterThan(2000)   


    })
})




})