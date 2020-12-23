/// <reference types="Cypress" />
const Locators = require('../fixtures/Locators.json')

describe ('login stub', () => {
    it('stub login', () => {
        cy.visit('/login')
        cy.get(Locators.Login.Email).type('testhome@test.com')
        cy.get(Locators.Login.Password).type('test1234')
        cy.get(Locators.Login.Submit).click()
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {fixture : 'stubUser.json'})
        
    })
})