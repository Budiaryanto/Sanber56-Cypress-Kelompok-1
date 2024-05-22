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

// Cypress.Commands.loginPage
Cypress.Commands.add('loginLuma', (emailUser,passUser) => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('.login-container > .block-customer-login > .block-title > #block-customer-login-heading').should('be.visible')
    cy.get('#email').type(emailUser)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(passUser)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()    
})
// Cypress.Commands.add('login', (email, password) => { ... })

//Custom command Add&UpdateProduct
Cypress.Commands.add('LoginDashboard', (UrlLogin) => {
    cy.log('Sign in before Choose products and Update Shopping Cart')
        cy.visit(UrlLogin)
        cy.reload(true)
})

Cypress.Commands.add('LoginUser4', (useremail,userpassword) => {
        cy.get('#email').clear().type(useremail)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').clear().type(userpassword)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.url().should('include','account')
})

Cypress.Commands.add('QtyKetik', (element,value) => {
    cy.get(element)
    .should('be.visible')
    .clear()
    .type(value)
})

Cypress.Commands.add('VerifyMessage', (element,message) => {
    cy.get(element)
    .should('contain.text',message)
})

Cypress.Commands.add('VerifyVisible', (element) => {
    cy.get(element)
    .should('be.visible')
})

Cypress.Commands.add('AddtoCart', (element) => {
    cy.get(element).click()
})

Cypress.Commands.add('RadioButton', (element) => {
    cy.get(element).click().should('be.checked')

})
//

/////////////////////////////////////////////////////////////////////

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })