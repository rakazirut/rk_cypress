Cypress.Commands.add('checkIfVisible', (...elements) => {
    elements.forEach(ele =>
        cy.get(ele).should('be.visible'))
})