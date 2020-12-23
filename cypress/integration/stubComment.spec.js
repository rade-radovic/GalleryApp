/// <reference types="Cypress" />
const Locators = require('../fixtures/Locators.json')

describe('Stub Comment', () =>{
    it('stub comment', () =>{
        cy.visit('/login')
        cy.get(Locators.Login.Email).type('testhome@test.com')
        cy.get(Locators.Login.Password).type('test1234')
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Header.MyGalleries).click()
        cy.get(Locators.MyGalleries.BoxTitle).eq(0).click()
        cy.get(Locators.MyGalleries.Comment).type('Cy komentar')
        cy.get(Locators.MyGalleries.Submit).click()
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/comments', { fixtures : 'stubComments.json'})
    })
})