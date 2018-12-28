/// <reference types="Cypress" />

context('Actions', () => {
    // beforeEach(() => {
    //   cy.visit('https://www.tops.co.th')
    // })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.visit('https://trello.com/login?')
      cy.get('#user').type('cypressworkshop@outlook.com').should('have.value', 'cypressworkshop@outlook.com')
      cy.get('#password').type('1234567890')
      cy.get('#login').click()
    })


})

    