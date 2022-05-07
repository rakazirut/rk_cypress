const product_elements = {
    top_nav: {
        hamburger_menu: {
            main_menu_button: '.bm-burger-button',
            menu_sidebar: '.bm-menu',
            menu_option: '.menu-item',
            option_id: {
                inventory: 'inventory_sidebar_link',
                about: 'about_sidebar_link',
                logout: 'logout_sidebar_link',
                reset: 'reset_sidebar_link'
            },
            close_btn: '.bm-cross-button'
        },
        app_logo: '.app_logo',
        shopping_cart: {
            icon: '.shopping_cart_link',
            title: '.title',
            continue_btn: '[data-test=continue-shopping]',
            checkout_btn: '[data-test=checkout]',
            cart_item: '.cart_item',
            cart_quantity: '.cart_quantity',
            cart_item_label: '.cart_item_label',
            cart_remove_btn: '.cart_button'
        },
        sort_dropdown: {
            container: '.product_sort_container',
            options: [
                'az',
                'za',
                'lohi',
                'hilo'
            ] 
        },
        nav_mascot: '.peek'
    },
    inventory: {
        add_cart_btn: '.btn_inventory',
        inventory_container: '.inventory_container',
        inventory_list: '.inventory_list',
        inventory_item: '.inventory_item',
        inventory_item_name: '.inventory_item_name',
    },
    footer: {
        social: {
            social_container: '.social',
            social_twit: '.social_twitter',
            social_fb: '.social_facebook',
            social_linkd: '.social_linkedin'
        },
        footer_mascot: '.footer_robot'
    }
}

export default product_elements