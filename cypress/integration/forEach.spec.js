/// <reference types="Cypress" />
const faker = require('faker')
const Locators = require('../fixtures/Locators.json')

describe('primer2 for each', () =>{
    before("visit gallery app", () =>{
        cy.visit('/')
    })
    it('for each primer', () => {
        cy.get('.cell').each(($galleryCard, $index, $list) => {
            if($galleryCard.children().eq(0).text().trim() === 'District Brand Strategies'){
                expect($galleryCard.children(1).eq(1).children().text().trim()).to.equal('test123 test123')
                // console.log($galleryCard)
            }
        })
    })
})