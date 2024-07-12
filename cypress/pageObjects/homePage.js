class HomePage{

    elements = {
        logInButton : () => cy.get('.site-navbar-clear > .sa-head > .sa-side > :nth-child(1) > .sa-link')
    }

    goToLogin() {
        this.elements.logInButton().click();
    }

}

export default HomePage;