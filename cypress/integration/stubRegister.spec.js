/// <reference types="Cypress" />
const Locators = require('../fixtures/Locators.json')

describe ('registracija stub', () =>{
    it('stub registracije', () => {
        cy.visit('/register')
        cy.get(Locators.Register.FirstName).type('test12')
        cy.get(Locators.Register.LastName).type('test34')
        cy.get(Locators.Register.Email).type('test1234@test.com')
        cy.get(Locators.Register.Password).type('test1234')
        cy.get(Locators.Register.PasswordConfirmation).type('test1234') 
        cy.get(Locators.Register.Terms).check()
        cy.get(Locators.Register.Submit).click()
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', { ficture : 'stubUser.json'})
    })
})


