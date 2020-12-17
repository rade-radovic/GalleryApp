describe('login testovi', () => {
    it('posetiti strancu', () => {
        cy.visit('/')
    })
    it('kliknuti na login', () => {
        cy.visit('/')
        cy.get('.nav-link').eq(1).click()
    })
    it('login with valid credentials', () =>{
        cy.visit('/')
        cy.get('a[href="/login"]').click()
        cy.get('#email').type('test123123@test.com')
        cy.get('#password').type("test123123")
        cy.get('button').click()
    })
    it.only('logout', () =>{
        cy.visit('/')
        cy.get('a[href="/login"]').click()
        cy.get('#email').type('test123123@test.com')
        cy.get('#password').type("test123123")
        cy.get('button').click()
        // cy.wait(500)
        cy.get('.nav-link').should('have.length', 4)
        cy.get('.nav-link').eq(3).click()
    })


})