import LoginPage from '../pageObjects/loginPage'
import HomePage from '../pageObjects/homePage'

describe('Login Test', () => 
  {
    beforeEach(() => {
      const homePage = new HomePage();
      cy.visit(Cypress.env('baseURL'))
      homePage.goToLogin();

    })

  it('Attempt login with incorrect info and verify error', () => {
    const loginPage = new LoginPage();
    loginPage.enterUsername(Cypress.env('username'));
    loginPage.enterPassword(Cypress.env('password'));
    //ADDED GIT COMMENT
    loginPage.clickLogin();
    //test
    loginPage.elements.errorMessage().should('contain.text', 'Invalid email or password.')
  })

})