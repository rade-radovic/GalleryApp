/// <reference types="Cypress" />
const faker = require('faker')
const Locators = require('../fixtures/Locators.json')
let token = "";
let galleryId = "";

let userData = {
    randomTitle: faker.name.title(),
    randomDescription: faker.lorem.sentence(),
    randomImage: [`${faker.image.avatar()}`]
    // faker.image.avatar(), //jedino avatar upisuje imageURL u '*.jpg' formatu
    // randomImage2: faker.image.imageUrl()
};

describe('Primer 4 dan', () =>{
    
    before('Visit gallery app', () => {
        cy.visit('/')
        cy.url().should("contains", 'gallery-app')
    })

    it('Request example', () =>{
        cy.request({
            method : 'POST',
            url : 'https://gallery-api.vivifyideas.com/api/auth/login',
            body : {
                email:"testhome@test.com",
                password:"test1234"
            }
        }).its('body').then((responseBody) => {
            window.localStorage.setItem('token', responseBody.access_token);
            token = responseBody.access_token;     //izvlacenje tokena
            console.log(token);
        })
        // cy.visit('/my-galleries')
    })

    it('backend create gallery', () =>{
        cy.request({
            method : 'POST',
            url : 'https://gallery-api.vivifyideas.com/api/galleries',
            body : {
                title: userData.randomTitle,
                description : userData.randomDescription,
                images :userData.randomImage
            },
            headers : {
                authorization : `Bearer ${token}`  //prosledjivanje tokena
            }
            
        
        }).its('body').then((responseBody) =>{
            expect(responseBody.description).to.equal(userData.randomDescription);
            expect(responseBody.title).to.equal(userData.randomTitle)
            galleryId = responseBody.id
            // console.log(galleryId)
        })
    })

    it('Get new gallery', () =>{
        cy.request({
            method : 'GET',
            url : (`https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`)  //znak pored tilde, dodavanje gallery id u urlg
        }).its('body').then((responseBody) =>{
            expect(responseBody.id).to.equal(galleryId)
            expect(responseBody.title).to.equal(userData.randomTitle)
            expect(responseBody.description).to.equal(userData.randomDescription);
            expect(responseBody.images[0].image_url).to.equal(userData.randomImage[0])
        })
    })
})

