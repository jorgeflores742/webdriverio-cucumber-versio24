'use strict';

function Page () { //eslint-disable-line require-jsdoc
}

Page.prototype.open = function (path) {
    browser.url('/' + path); //eslint-disable-line prefer-template
};

module.exports = new Page();
