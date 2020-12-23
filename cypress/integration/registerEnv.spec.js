/// <reference types="Cypress" />

// const faker = require('faker')
const Locators = require('../fixtures/Locators.json')


// let userData = {
//     randomName : faker.name.firstName(),
//     randomLastName : faker.name.lastName(),
//     randomEmail : faker.internet.email(),
//     randomPassword : faker.internet.password(),

// }

describe('register Env', () => {
    
    beforeEach('register Env', () =>{
        cy.visit("/")
        cy.registerCommand()
    })

    it('register env', () => {
        cy.visit('/login')
        
    })
})