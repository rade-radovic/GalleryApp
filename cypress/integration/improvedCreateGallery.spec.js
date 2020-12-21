/// <reference types="Cypress" />
const faker = require('faker')
const Locators = require('../fixtures/Locators.json')

describe('Poboljsani create gallery', () =>{

    beforeEach("Visit gallery app", () => {
        cy.visit("/")
        cy.url().should("contains", "https://gallery-app")
    })

    let correctEmail = "testhome@test.com"
    let galleryTitle = "Naslov Galerije"
    let galleryDescription = "Opis Galerije"
    let imageUrl = "https://www.fossilera.com/sp/324833/anatase/anatase-quartz.jpg"
    it('Create Gallery', () => {
        // cy.visit('/')
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type('test1234')
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Header.CreateGallery).click()
        cy.get(Locators.CreateGallery.Title).type(galleryTitle)
        cy.get(Locators.CreateGallery.Desription).type(galleryDescription)
        cy.get(Locators.CreateGallery.ImageUrl).type(imageUrl)
        cy.get(Locators.CreateGallery.SubmitCancel).eq(0).click()
        cy.get(Locators.Header.MyGalleries).click()
    })

    it.only('Delete Gallery', () => {
        // cy.visit('/')
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type('test1234')
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Header.MyGalleries).click()
        cy.get(Locators.MyGalleries.BoxTitle).eq(0).click()
        cy.get(Locators.MyGalleries.DeleteGallery).click()
    })





    
})