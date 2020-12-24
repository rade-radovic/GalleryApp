/// <reference types="Cypress" />
const faker = require('faker')
const Locators = require('../fixtures/Locators.json')
describe('primer2', () => {
    before("visit gallery app", () => {
        cy.visit('/')
    })


    it.only('forEachPrimer', () => {
        cy.get('.cell').each(($galleryCard, $index, $list) => {
            // console.log($galleryCard)
             if($galleryCard.children().eq(0).text().trim() === 'District Brand Strategist'){
                 expect($galleryCard.children(1).eq(1).children().text().trim()).to.equal('test123 test123')
                // console.log($galleryCard)
             }
        })
    })
    it('primer sa stubovanim respponsom', () =>{
        cy.intercept('GET', 'https://gallery-api.vivifyideas.com/api/galleries?page=1&term=',
        {fixture : 'stubGalleries.json'}
        )
        cy.visit('/')
    })
} )