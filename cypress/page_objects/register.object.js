class AuthRegister{
    get firstName(){
        return cy.get("#first-name")
    }

    get lastName (){
        return cy.get("#last-name")
    }

    get email (){
        return cy.get("#email")
    }

    get password(){
        return cy.get("#password")
    }

    get passwordConfirmation (){
        return cy.get("#password-confirmation")
    }

    get terms (){
        return cy.get(".form-check-input")
    }

    get submit (){
        return cy.get(".btn")
    }

    register(firstName, lastName, email, password, passwordConfirmation){
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        this.terms.check()
        this.submit.click()
    }
}

export const authRegister = new AuthRegister();