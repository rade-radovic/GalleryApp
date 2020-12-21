class CreateGallery {
    get title(){
        return cy.get("#title")
    }
    get description (){
        return cy.get("#description")
    }
    get imageUrl(){
        return cy.get("input[placeholder='image url']")
    }
    get submit (){
        return cy.get("button[type='submit']").eq(0)
    }

    createGallery (title, description, imageUrl){
        this.title.type(title)
        this.description.type(description)
        this.imageUrl.type(imageUrl)
        this.submit.click()
    }
}

export const createGallery = new CreateGallery