/// <reference types="cypress" />
describe("visit OrangeHRM", ()=>{
    it("visit main url",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com")
    })

    it("Login OrangeHRM", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
    })
})
