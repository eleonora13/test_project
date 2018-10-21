let until = protractor.ExpectedConditions;

export const helpers = {
    waitElementPresence: async function (element) {
        await browser.wait(until.presenceOf(element), 5000);
    },

    waitElementClickable: async function (element) {
        await browser.wait(until.elementToBeClickable(element), 5000);
    },

    waitElementVisible: async function (element) {
        await browser.wait(until.visibilityOf(element), 5000);
    },

    waitElementSelected: async function (element) {
        await browser.wait(until.elementIsSelected(element), 5000);
    },

    waitElementNotSelected: async function (element) {
        await browser.wait(until.elementIsNotSelected(element), 5000);
    }
};

