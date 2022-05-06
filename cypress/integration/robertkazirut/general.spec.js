/* global cy */

context('Personal Website Testing', () => {
    describe('General Scenarios', () => {
        beforeEach(() => {
            cy.visit('https://robertkazirut.com/');
        });

        it('Verify URL', () => {
            cy.url()
                .should('contain', 'robertkazirut');
        });

        it('Verify images display', () => {
            cy.get('.custom-logo')
                .should('be.visible')
                .parent()
                .invoke('attr', 'href')
                .then((url) => {
                    cy.url().should('contain', url);
                });
            cy.get('.social-icons__icon')
                .first()
                .should('be.visible')
                .invoke('attr', 'href')
                .then((url) => {
                    cy.wrap(url).should('contain', 'https://www.linkedin.com/in/robert-kazirut/');
                });
            cy.get('.social-icons__icon')
                .last()
                .should('be.visible')
                .invoke('attr', 'href')
                .then((url) => {
                    cy.wrap(url).should('contain', 'https://github.com/rakazirut/');
                });
        });
    });
});