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
         cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/register',{
            first_name : userData.randomName,
            last_name: userData.randomLastName,
            email : userData.randomEmail,
            password : userData.randomPassword,
            password_confirmation : userData.randomPassword,
            terms_and_conditions : true
        }).its('body').then((responseBody) => {
            window.localStorage.setItem('token', responseBody.access_token)
        })
    })

    it('register through backend', () => {
        cy.visit('/login')

    })
})