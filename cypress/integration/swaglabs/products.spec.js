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
                product_elements.top_nav.shopping_cart.icon,
                product_elements.top_nav.sort_dropdown.container
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

        it('Verify empty shopping cart', () => {
            cy.get(product_elements.top_nav.shopping_cart.icon)
                .click()
            cy.checkIfVisible(
                product_elements.top_nav.shopping_cart.title,
                product_elements.top_nav.shopping_cart.checkout_btn,
                product_elements.top_nav.shopping_cart.continue_btn
            )
            cy.get(product_elements.top_nav.shopping_cart.title)
                .contains('Your Cart')
        })

        it('Verify sort dropdown options', () => {
            cy.get(product_elements.top_nav.sort_dropdown.container)
                .find('option')
                .then(options => {
                    const actual = [...options].map(o => o.value)
                    expect(actual).to.deep.eq(product_elements.top_nav.sort_dropdown.options)
                })
        })

        it('Verify sort dropdown functionality', () => {
            let origOrder = []
            cy.get(product_elements.inventory.inventory_item_name).each(ele => {
                cy.wrap(ele).invoke('text').then(e => {
                    origOrder.push(e)
                })
            })
            const options = product_elements.top_nav.sort_dropdown.options
            options.shift()
            options.forEach(option => {
                cy.get(product_elements.top_nav.sort_dropdown.container)
                    .select(option)
                let newOrder = []
                cy.get(product_elements.inventory.inventory_item_name).each(ele => {
                    cy.wrap(ele).invoke('text').then(e => {
                        newOrder.push(e)
                    })
                }).then(() => {
                    expect(origOrder).to.not.deep.eq(newOrder)
                })
            })
        })

        it('Verify add item to the cart', () => {
            cy.get(product_elements.inventory.add_cart_btn)
                .first()
                .click()
            cy.get(product_elements.inventory.add_cart_btn)
                .first()
                .contains('Remove')
            cy.get(product_elements.top_nav.shopping_cart.icon)
                .children()
                .contains(1)
        })

        it('Verify non-empty shopping cart', () => {
            cy.get(product_elements.inventory.add_cart_btn)
                .first()
                .click()
            cy.get(product_elements.inventory.add_cart_btn)
                .first()
                .contains('Remove')
            cy.get(product_elements.top_nav.shopping_cart.icon)
                .children()
                .contains(1)
            cy.get(product_elements.top_nav.shopping_cart.icon)
                .click()
            cy.checkIfVisible(
                product_elements.top_nav.shopping_cart.cart_item,
                product_elements.top_nav.shopping_cart.cart_item_label,
                product_elements.top_nav.shopping_cart.cart_quantity,
                product_elements.top_nav.shopping_cart.cart_remove_btn,
            )
        })

        it('Verify remove item from shopping cart', () => {
            cy.get(product_elements.inventory.add_cart_btn)
                .first()
                .click()
            cy.get(product_elements.inventory.add_cart_btn)
                .first()
                .contains('Remove')
            cy.get(product_elements.top_nav.shopping_cart.icon)
                .children()
                .contains(1)
            cy.get(product_elements.top_nav.shopping_cart.icon)
                .click()
            cy.get(product_elements.top_nav.shopping_cart.cart_remove_btn)
                .click()
            cy.checkNotExist(
                product_elements.top_nav.shopping_cart.cart_item,
                product_elements.top_nav.shopping_cart.cart_item_label,
                product_elements.top_nav.shopping_cart.cart_quantity,
                product_elements.top_nav.shopping_cart.cart_remove_btn,
            )
            cy.get(product_elements.top_nav.shopping_cart.icon)
                .children()
                .should('not.exist')
            cy.get(product_elements.top_nav.shopping_cart.continue_btn)
                .click()
            cy.get(product_elements.inventory.add_cart_btn)
                .first()
                .contains('Add to cart')
        })
    })
});