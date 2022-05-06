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
        shopping_cart: '.shopping_cart_link',
        sort_dropdown: '.product_sort_container',
        nav_mascot: '.peek'
    },
    inventory: {
        add_cart_btn: 'button',
        inventory_container: '.inventory_container',
        inventory_list: '.inventory_list',
        inventory_item: '.inventory_item'
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