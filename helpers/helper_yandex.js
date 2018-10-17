let until = protractor.ExpectedConditions;

export const helpers = {
    waitElementPresence: async function (locator) {
        await browser.wait(until.presenceOf(element(locator)), 5000);
    },

    waitElementClickable: async function (locator) {
        await browser.wait(until.elementToBeClickable(element(locator)), 5000);
    },

    waitElementVisible: async function (locator) {
        await browser.wait(until.visibilityOf(element(locator)), 5000);
    },

    waitElementSelected: async function (locator) {
        await browser.wait(until.elementIsSelected(element(locator)), 5000);
    },

    waitElementNotSelected: async function (locator) {
        await browser.wait(until.elementIsNotSelected(element(locator)), 5000);
    }
};

