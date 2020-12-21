class DeleteGallery{
    get firstGallery(){
        return cy.get("a[class='box-title']").eq(0)
    }
    get deleteGallery(){
        return cy.get(":nth-child(5) > button.btn")
    }

    deletefunction (){
        this.firstGallery.click()
        this.deleteGallery.click()
    }
}

export const deleteGallery = new DeleteGallery