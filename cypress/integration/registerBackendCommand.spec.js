/// <reference types="Cypress" />

const faker = require('faker')
const Locators = require('../fixtures/Locators.json')


let userData = {
    randomName : faker.name.firstName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password(),

}

describe('register through backend', () => {
    
    beforeEach('register through backend', () =>{
        cy.visit("/")
        cy.registerCommand(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPassword)
    })

    it('register through backend', () => {
        cy.visit('/login')

    })
})