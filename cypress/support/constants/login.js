const login_verbiage = {
    usernames: {
        standard: 'standard_user',
        locked: 'locked_out_user',
        problem: 'problem_user',
        glitch: 'performance_glitch_user'
    },
    password: 'secret_sauce',
    username_error_msg: 'Epic sadface: Username is required',
    password_error_msg: 'Epic sadface: Password is required',
    locked_error_msg: 'Epic sadface: Sorry, this user has been locked out.',
    wrongpass_error_msg: 'Epic sadface: Username and password do not match any user in this service'
}

const login_elements = {
    user_field: '[data-test=username]',
    pass_field: '[data-test=password]',
    login_button: '[data-test=login-button]',
    mascot_img: '.bot_column',
    login_logo: '.login_logo',
    error_msg: '.error-message-container'
}

export {
    login_verbiage,
    login_elements
}