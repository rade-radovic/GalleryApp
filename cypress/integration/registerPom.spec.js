/// <reference types="Cypress" />
import { authRegister } from '../page_objects/register.object'
import { header } from '../page_objects/header.object'

const faker = require('faker')
let userData = {
    randomFirstName : faker.name.firstName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password(),
}

describe ('register POM', () => {
    it('Register using POM', () =>{
        cy.visit('/')
        header.registerButton.click()
        authRegister.register(userData.randomFirstName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPassword)
    })
})