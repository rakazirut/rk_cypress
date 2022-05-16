import {
    login_elements
} from './constants/login'

Cypress.Commands.add('checkIfVisible', (...elements) => {
    elements.forEach(ele =>
        cy.get(ele).should('be.visible'))
})

Cypress.Commands.add('checkNotExist', (...elements) => {
    elements.forEach(ele =>
        cy.get(ele).should('not.exist'))
})

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')
    cy.get(login_elements.user_field)
        .type(username)
    cy.get(login_elements.pass_field)
        .type(password)
    cy.get(login_elements.login_button)
        .click()
    cy.url()
        .should('contain', 'inventory');
})

Cypress.Commands.add('setUpCart', (reload = true, contents = '4,1,2') => {
    var b = contents.split(',').map(Number);
    localStorage.setItem('cart-contents', `[${b}]`)
    if (reload) {
        cy.reload()
    }
})