'use strict';
class CreateNewBoardPage {


    constructor() {
    }

    setDataToNewBoardTextField(data) {
        const dataString = new Array();
        let datatable = data.raw();
        if (datatable[1][0] != null) {
            browser.setValue("input[class='subtle-input']",datatable[1][0]);
            browser.pause(1000);
        }
        if (datatable[1][1] != null) {
            browser.click('button.subtle-chooser-trigger.unstyled-button.vis-chooser-trigger');
            browser.pause(1000);
            if (datatable[1][1] == "private") {
                browser.click("span[class='icon-sm icon-private']");
            } else {
                browser.click("span[class='icon-sm icon-public']");
                browser.pause(1000);
                browser.click("input[class='js-confirm full primary']");
                browser.pause(1000);
            }
        }
        if (datatable[1][2] != null) {
            browser.click("span[class='icon-sm icon-overflow-menu-horizontal']");
            if (datatable[1][2] == "color") {
                browser.pause(1000);
                browser.click("a[class='quiet-button']");
                browser.pause(1000);
                browser.click("button[title="+datatable[1][3]+"]");
                browser.pause(1000);
            }
        }
    }

    clickCreateBoardButton() {
        browser.pause(2000);
        browser.click('button.primary');
        browser.pause(1000);

    }
}
module.exports = CreateNewBoardPage;