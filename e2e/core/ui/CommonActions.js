'use strict';
class CommonActions {
    static click(element) {
        browser.waitForExist(element,30000);
        browser.click(element);
    }

    static setValue(element, value) {
        browser.waitForExist(element, 30000);
        browser.setValue(element,value);
    }
}
module.exports = CommonActions;