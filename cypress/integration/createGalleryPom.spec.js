/// <reference types="Cypress" />
import { createGallery } from '../page_objects/create_gallery'
import { header } from '../page_objects/header.object'
import { authLogin } from '../page_objects/login_object'
import { deleteGallery } from '../page_objects/delete_gallery_object'

let galleryTitle = "Naslov Galerije"
let galleryDescription = "Opis Galerije"
let imageUrl = "https://www.fossilera.com/sp/324833/anatase/anatase-quartz.jpg"

describe('Create Gallery POM', () => {
    it('Create Gallery using POM', () => {
        cy.visit('/')
        header.loginButton.click()
        authLogin.login("testhome@test.com", "test1234")
        header.createGalleryButton.click()
        createGallery.createGallery(galleryTitle, galleryDescription, imageUrl)
        header.myGalleriesButton.click()
        deleteGallery.deletefunction()
    })
})