// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('loginCommand', (userName, password) => {
    cy.request({
        method: 'POST',
        url : 'https://gallery-api.vivifyideas.com/api/auth/login',
        body : {
            email : userName,
            password : password
        }
    }).its('body').then((responseBody) => {
        window.localStorage.setItem('token', responseBody.access_token);
    
    })
})
// pitaj da li se preko tokena prepisuje, i gde je to
Cypress.Commands.add('loginCommandEnv', () => {
    cy.request({
        method: 'POST',
        url : 'https://gallery-api.vivifyideas.com/api/auth/login',
        body : {
            email : Cypress.env('EXTERNAL_USERNAME'),
            password : Cypress.env('EXTERNAL_PASSWORD') 
        }
    }).its('body').then((responseBody) => {
        window.localStorage.setItem('token', responseBody.access_token)
    })
})

Cypress.Commands.add('registerCommand', (firstName, LastName, email, password) => {
    cy.request({
        method : 'POST',
        url :  'https://gallery-api.vivifyideas.com/api/auth/register',
        body : {
            first_name : firstName,
            last_name: LastName,
            email : email,
            password : password,
            password_confirmation : password,
            terms_and_conditions : true
        }
    }).its('body').then((responseBody) => {
        window.localStorage.setItem('token', responseBody.access_token)
    }) 
})

Cypress.Commands.add('registerCommandEnv', () => {
    cy.request({
        method : 'POST',
        url :  'https://gallery-api.vivifyideas.com/api/auth/register',
        body : {
            first_name : Cypress.env('EXTERNAL_FIRST_NAME'),
            last_name: Cypress.env('EXTERNAL_LAST_NAME'),
            email :  Cypress.env('EXTERNAL_USERNAME'),
            password : Cypress.env('EXTERNAL_PASSWORD'),
            password_confirmation : Cypress.env('EXTERNAL_PASSWORD'),
            terms_and_conditions : true
        }
    }).its('body').then((responseBody) => {
        window.localStorage.setItem('token', responseBody.access_token)
    })
})