class CreateNewBoardPage {


    constructor() {
    }

    setNameToNewBoardTextField() {
        browser.pause(2000);
        browser.setValue("input[class='subtle-input']",'holaMundo52');
        browser.pause(2000);
    }

    clickCreateBoardButton() {
        browser.pause(2000);
        browser.click('button.primary');
        browser.pause(20000);

    }
}
module.exports = CreateNewBoardPage;