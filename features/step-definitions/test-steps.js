const {Given, When} = require('cucumber');

    Given('I navigate to trello', () => {
        browser.url("http://www.trello.com")
    });

    When('I clicked in button login', () => {
        browser.click('a.global-header-section-button');
        browser.pause(5000);
    });

// remote(options)
//     .init()
//     .url('https://trello.com/login?returnUrl=%2F')
//     .setValue('input[type=email]','jflorezedition742@gmail.com')
//     .setValue('input[type=password]','GoodMorning')
//     .click('#login')
//     .click('#boards-drawer')
//     .getUrl().then(function(url) {
//     console.log('Url was: ' + url);
// })
//     .end()
//     .catch(function(err) {
//         console.log(err);
//     });
//a.global-header-section-button
