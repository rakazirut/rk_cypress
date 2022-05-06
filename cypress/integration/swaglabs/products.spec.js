/* global cy */
import {
    login_verbiage
} from '../../support/constants/login'
import product_elements from '../../support/constants/product'

context('Sauce Demo', () => {
    describe('Product Page Scenarios', () => {
        beforeEach(() => {
            cy.login(login_verbiage.usernames.standard, login_verbiage.password);
        });

        it('Verify top navigation elements are present', () => {
            cy.checkIfVisible(
                product_elements.top_nav.app_logo,
                product_elements.top_nav.hamburger_menu.main_menu_button,
                product_elements.top_nav.nav_mascot,
                product_elements.top_nav.shopping_cart,
                product_elements.top_nav.sort_dropdown
            )
        })

        it('Verify hamburger menu options', () => {
            cy.get(product_elements.top_nav.hamburger_menu.main_menu_button)
                .click()
            cy.get(product_elements.top_nav.hamburger_menu.menu_sidebar)
                .within(() => {
                    cy.get(product_elements.top_nav.hamburger_menu.menu_option)
                        .contains('All Items')
                        .should('have.attr', 'id', product_elements.top_nav.hamburger_menu.option_id.inventory)
                    cy.get(product_elements.top_nav.hamburger_menu.menu_option)
                        .contains('About')
                        .should('have.attr', 'id', product_elements.top_nav.hamburger_menu.option_id.about)
                        .and('have.attr', 'href', 'https://saucelabs.com/')
                    cy.get(product_elements.top_nav.hamburger_menu.menu_option)
                        .contains('Logout')
                        .should('have.attr', 'id', product_elements.top_nav.hamburger_menu.option_id.logout)
                    cy.get(product_elements.top_nav.hamburger_menu.menu_option)
                        .contains('Reset App State')
                        .should('have.attr', 'id', product_elements.top_nav.hamburger_menu.option_id.reset)
                })
            cy.get(product_elements.top_nav.hamburger_menu.close_btn)
                .should('be.visible')
                .click()
            cy.get(product_elements.top_nav.hamburger_menu.menu_sidebar)
                .should('not.be.visible')
        })

        it('Verify user can logout', () => {
            cy.get(product_elements.top_nav.hamburger_menu.main_menu_button)
                .click()
            cy.get(product_elements.top_nav.hamburger_menu.menu_sidebar)
                .within(() => {
                    cy.get(product_elements.top_nav.hamburger_menu.menu_option)
                        .contains('Logout')
                        .click()
                })
            cy.url()
                .should('not.contain', 'inventory')
        })
    });
});