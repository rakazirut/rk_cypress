/* global cy */
import {
    login_elements,
    login_verbiage
} from '../../support/constants/login'

context('Sauce Demo Scenarios', () => {
    describe('Login Page Scenarios', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('Verify URL', () => {
            cy.url()
                .should('contain', 'saucedemo');
        });

        it('Verify elements display', () => {
            cy.checkIfVisible(
                login_elements.user_field,
                login_elements.pass_field,
                login_elements.login_button,
                login_elements.mascot_img,
                login_elements.login_logo
            )
        });

        it('Verify username and password are required for login', () => {
            cy.get(login_elements.login_button)
                .click()
            cy.get(login_elements.error_msg)
                .contains(login_verbiage.username_error_msg)
                .should('be.visible')
            cy.get(login_elements.user_field)
                .should('have.class', 'error')
                .siblings()
                .should('have.attr', 'data-icon', 'times-circle')
            cy.get(login_elements.pass_field)
                .should('have.class', 'error')
                .siblings()
                .should('have.attr', 'data-icon', 'times-circle')
        });

        it('Verify password is required for login', () => {
            cy.get(login_elements.user_field)
                .type(login_verbiage.usernames.standard)
            cy.get(login_elements.login_button)
                .click()
            cy.get(login_elements.error_msg)
                .contains(login_verbiage.password_error_msg)
                .should('be.visible')
            cy.get(login_elements.user_field)
                .should('have.class', 'error')
                .siblings()
                .should('have.attr', 'data-icon', 'times-circle')
            cy.get(login_elements.pass_field)
                .should('have.class', 'error')
                .siblings()
                .should('have.attr', 'data-icon', 'times-circle')
        });

        it('Verify username is required for login', () => {
            cy.get(login_elements.pass_field)
                .type(login_verbiage.password)
            cy.get(login_elements.login_button)
                .click()
            cy.get(login_elements.error_msg)
                .contains(login_verbiage.username_error_msg)
                .should('be.visible')
            cy.get(login_elements.user_field)
                .should('have.class', 'error')
                .siblings()
                .should('have.attr', 'data-icon', 'times-circle')
            cy.get(login_elements.pass_field)
                .should('have.class', 'error')
                .siblings()
                .should('have.attr', 'data-icon', 'times-circle')
        });

        it('Verify incorrect username/password', () => {
            cy.get(login_elements.user_field)
                .type(login_verbiage.usernames.standard)
            cy.get(login_elements.pass_field)
                .type(login_verbiage.usernames.standard)
            cy.get(login_elements.login_button)
                .click()
            cy.get(login_elements.error_msg)
                .contains(login_verbiage.wrongpass_error_msg)
                .should('be.visible')
            cy.get(login_elements.user_field)
                .should('have.class', 'error')
                .siblings()
                .should('have.attr', 'data-icon', 'times-circle')
            cy.get(login_elements.pass_field)
                .should('have.class', 'error')
                .siblings()
                .should('have.attr', 'data-icon', 'times-circle')
        });

        it('Verify locked user login', () => {
            cy.get(login_elements.user_field)
                .type(login_verbiage.usernames.locked)
            cy.get(login_elements.pass_field)
                .type(login_verbiage.password)
            cy.get(login_elements.login_button)
                .click()
            cy.get(login_elements.error_msg)
                .contains(login_verbiage.locked_error_msg)
                .should('be.visible')
            cy.get(login_elements.user_field)
                .should('have.class', 'error')
                .siblings()
                .should('have.attr', 'data-icon', 'times-circle')
            cy.get(login_elements.pass_field)
                .should('have.class', 'error')
                .siblings()
                .should('have.attr', 'data-icon', 'times-circle')
        });

        it('Verify problem user login', () => {
            cy.get(login_elements.user_field)
                .type(login_verbiage.usernames.problem)
            cy.get(login_elements.pass_field)
                .type(login_verbiage.password)
            cy.get(login_elements.login_button)
                .click()
            cy.url()
                .should('contain', 'inventory');
        });

        it('Verify performance glitch user login', () => {
            cy.get(login_elements.user_field)
                .type(login_verbiage.usernames.glitch)
            cy.get(login_elements.pass_field)
                .type(login_verbiage.password)
            cy.get(login_elements.login_button)
                .click()
            cy.url()
                .should('contain', 'inventory');
        });

        it('Verify standard user login', () => {
            cy.get(login_elements.user_field)
                .type(login_verbiage.usernames.standard)
            cy.get(login_elements.pass_field)
                .type(login_verbiage.password)
            cy.get(login_elements.login_button)
                .click()
            cy.url()
                .should('contain', 'inventory');
        });
    });
});