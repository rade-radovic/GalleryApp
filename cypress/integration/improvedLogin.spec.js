/// <reference types="Cypress" />

const faker = require('faker')
const Locators = require('../fixtures/Locators.json')

let userData = {
    randomName : faker.name.firstName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password(),

}

describe('Poboljsani Login', () => {

    beforeEach("Visit gallery app", () => {
        cy.visit("/")
        cy.url().should("contains", "https://gallery-app")
    })

    let correctEmail = "testhome@test.com"
    it('Login with valid credentials', () => {
        // cy.visit('/')
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type('test1234')
        cy.get(Locators.Login.Submit).click()
    })
    it('Logout', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type('test1234')
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Header.Logout).click()
    }) 

    it('login with faker invalid credentials', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(userData.randomEmail)
        cy.get(Locators.Login.Password).type(userData.randomPassword)
        cy.get(Locators.Login.Submit).click()
    })

    it.only('Register with faker credentials', () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(userData.randomName)
        cy.get(Locators.Register.LastName).type(userData.randomLastName)
        cy.get(Locators.Register.Email).type(userData.randomEmail)
        cy.get(Locators.Register.Password).type(userData.randomPassword)
        cy.get(Locators.Register.PasswordConfirmation).type(userData.randomPassword)
        cy.get(Locators.Register.Terms).check()
        cy.get(Locators.Register.Submit).click()
    })
})