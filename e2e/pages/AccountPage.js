'use strict';
class AccountPage {


    constructor() {
    }

    clickBoardButton() {
        browser.pause(8000);
        browser.click("a[class='header-btn header-boards js-boards-menu']");

    }

    selectCreateNewBoard() {
        browser.pause(1000);
        browser.click('a.quiet-button.js-add-board');
        browser.pause(1000);
    }
}
module.exports = AccountPage;
