let until = protractor.ExpectedConditions;

const helpers = {
    waitElementPresence: async function (locator) {
        await browser.wait(until.presenceOf(element(locator)), 5000);
    },

    waitElementClickable: async function (locator) {
        await browser.wait(until.elementToBeClickable(element(locator)), 5000);
    },

    waitElementVisible: async function (locator) {
        await browser.wait(until.visibilityOf(element(locator)), 5000);
    }

};

module.exports = helpers;