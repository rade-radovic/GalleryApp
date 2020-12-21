/// <reference types="Cypress" />

const Locators = require('../fixtures/Locators.json')

describe("All Galleries locators", () =>{

    beforeEach("Visit gallery app", () => {
        cy.visit("/")
        cy.url().should("contains", "https://gallery-app")
    })

    let correctEmail = "testhome@test.com"
    let galleryTitle = "Naslov Galerije"
    it("All Gelleries", ()=> {
        cy.get(Locators.Header.AllGalleries).eq(1).click()
        cy.get(Locators.AllGalleries.LoadMore).click()
        cy.get(Locators.AllGalleries.Search).type(galleryTitle)
        cy.get(Locators.AllGalleries.Filter).click()
        cy.wait(500)
        cy.get(Locators.MyGalleries.BoxTitle).eq(0).click()
        cy.get(Locators.Header.AllGalleries).eq(1).click()
        
    })

    
})

