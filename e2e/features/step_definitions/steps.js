const {Given, When, Then} = require('cucumber');
const ePage = require ('../../pages/example.pages');
const LoginPages = require ('../../pages/LoginPage');
const AccountPages = require ('../../pages/AccountPage');
const CreateBoardPages = require ('../../pages/CreateNewBoardPage');

let loginP = new LoginPages();
let accountP = new AccountPages();
let createNBoardP = new CreateBoardPages();

Given(/^I navigate to trello$/, () => {
    browser.url(ePage.trelloUrl)
});

When(/^I with account valid clicked in button login$/, () => {
    loginP.setEmailTextField(ePage.user);
    loginP.setPasswordTextField(ePage.password);
    loginP.clickLogin();
});

When(/^I create a new board$/, function(data){
    accountP.clickBoardButton();
    accountP.selectCreateNewBoard();
    createNBoardP.setDataToNewBoardTextField(data);
    createNBoardP.clickCreateBoardButton();
});

Then(/^I expect my board created$/, () => {
});
//"([^"]*)"