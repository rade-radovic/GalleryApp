/// <reference types="Cypress" />
import { authLogin } from '../page_objects/login_object'
import { header } from '../page_objects/header.object'

describe('POM Login', () => {
    it('login using POM', () => {
        cy.visit('/')
        // cy.get(".nav-link").eq(1).click()
        header.loginButton.click()
        authLogin.login("testhome@test.com", "test1234")
    })
    it('logout using POM', ()=> {
        cy.visit('/')
        // cy.get(".nav-link").eq(1).click()
        header.loginButton.click()
        authLogin.login("testhome@test.com", "test1234")
        header.logoutButton.click()
    })

})