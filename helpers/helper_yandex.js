let until = protractor.ExpectedConditions;

export const helpers = {
    waitElementPresence: async function (element) {
        await browser.wait(until.presenceOf(element), 10000);
    },

    waitElementClickable: async function (element) {
        await browser.wait(until.elementToBeClickable(element), 10000);
    },

    waitElementVisible: async function (element) {
        await browser.wait(until.visibilityOf(element), 10000);
    },

    waitElementSelected: async function (element) {
        await browser.wait(until.elementIsSelected(element), 10000);
    },

    waitElementNotSelected: async function (element) {
        await browser.wait(until.elementIsNotSelected(element), 10000);
    }
};

