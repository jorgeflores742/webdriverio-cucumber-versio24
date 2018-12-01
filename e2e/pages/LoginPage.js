'use strict';

const CommontActions = require('../core/ui/CommonActions');

class LoginPage {


    constructor() {
    }

    setEmailTextField(user) {
        CommontActions.setValue('#user',user)
    }

    setPasswordTextField(password) {
        CommontActions.setValue('#password',password)
    }

    clickLogin() {
        CommontActions.click('#login')
    }
}
module.exports = LoginPage;