/// <reference types="Cypress" />
const Locators = require('../fixtures/Locators.json')

describe('Stub create gallery', () => {
    it('Stub create gallery', () =>{
        cy.visit('/login')
        cy.get(Locators.Login.Email).type('testhome@test.com')
        cy.get(Locators.Login.Password).type('test1234')
        cy.get(Locators.Login.Submit).click()
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {fixture : 'stubUser.json'})
        cy.get(Locators.Header.CreateGallery).click()
        cy.get(Locators.CreateGallery.Title).type('Stub Gallery')
        cy.get(Locators.CreateGallery.Description).type('Opis Stub Galerije')
        cy.get(Locators.CreateGallery.ImageUrl).type('https://www.researchgate.net/profile/Jean-Marc_Jezequel/publication/221496129/figure/fig2/AS:667947240529924@1536262440241/Realistic-specific-stubs.png')
        cy.get(Locators.CreateGallery.SubmitCancel).eq(0).click()
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', {fixrure : 'stubCreateGallery.json'})
        // cy.get(Locators.Header.MyGalleries).click()
        // cy.get(Locators.MyGalleries.BoxTitle).eq(0).click()
        // cy.get(Locators.MyGalleries.DeleteGallery).click()

    })
})