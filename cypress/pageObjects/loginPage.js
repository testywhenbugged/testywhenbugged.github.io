class LoginPage {
    
    elements = {
        usernameInput : () => cy.get('#login-email'),
        passwordInput : () => cy.get('#login-password'),
        loginButton : () => cy.get('.css-b6zol9 > .css-fac52p > .MuiBox-root > .MuiButtonBase-root'),
        companyLogo : () => {},
        loginTitle : () => {},
        errorMessage : () => cy.get('#helper-label-login-password')
    }

    enterUsername(username) {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username)
    }

    enterPassword(password) {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password)
    }

    clickLogin() {
        this.elements.loginButton().click();
    }

    errorMessageVisible() {
        this.elements.errorMessage().should('be.visible')
    }

}

export default LoginPage;