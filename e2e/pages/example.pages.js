/** Example PageObject **/

const Page = require('./page');

const examplePages = Object.create(Page, {

    /*
     * Template
     */

    //$name:  { get: function () { return browser.element('$selector'); } },
    //$name:  { value: '$value' },

    trelloPageTitle:    { value: 'Trello' },
    trelloUrl:          { value: 'https://trello.com/login?returnUrl=%2F' },
    user:               { value: 'jflorezedition742@gmail.com'},
    password:           { value: 'GoodMorning'},
    userInput:          { value: 'user' },
    passwordInput:      { value: 'password' },
    loginButton:        { value: '#login' },
    resultsList:        { value: '#rso' },

});

module.exports = examplePages;
