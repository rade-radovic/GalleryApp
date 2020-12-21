class Header {
    get loginButton(){
        return cy.get("a[href='/login']")
    }
    get registerButton (){
        return cy.get("a[href='/register']")
    }
    get logoutButton () {
        return cy.get("a[role='button ']")
    }
    get createGalleryButton () {
        return cy.get("a[href='/create']")
    }
    get myGalleriesButton () {
        return cy.get("a[href='/my-galleries']")
    }

    logout(){
        this.logoutButton.click()
    }
}

export const header = new Header()