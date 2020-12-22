/// <reference types="Cypress" />
const faker = require('faker')
const Locators = require('../fixtures/Locators.json')
import { authLogin } from '../page_objects/login_object'
var galleryId = '';
let userData = {
    randomTitle: faker.name.title(),
    randomDescription: faker.lorem.sentence(),
    randomImage: faker.image.avatar(), //jedino avatar upisuje imageURL u '*.jpg' formatu
    // randomImage2: faker.image.imageUrl()
};
describe('create gallery', () => {
    it('izvlacenje vrednosti gallery ID prilikom kreiranja galerije', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', 
        (req) =>{
        }).as('succesfullyCreatedGallery')
        cy.visit('/login')
        // cy.get(Locators.Header.Login).click()
        authLogin.login('test123123@test.com', 'test123123')
        cy.get(Locators.Header.CreateGallery).click()
        cy.get(Locators.CreateGallery.Title).type(userData.randomTitle)
        cy.get(Locators.CreateGallery.Description).type(userData.randomDescription)
        cy.get(Locators.CreateGallery.ImageUrl).type(userData.randomImage)
        cy.get(Locators.CreateGallery.SubmitCancel).eq(0).click()
        cy.wait('@succesfullyCreatedGallery').then((interception) => {
            galleryId = interception.response.body.id
            // cy.log(galleryId)
            // console.log(interception)
        })
    })
    it('delete galery', () =>{
        cy.visit(`/galleries/${galleryId}`)

    })
})