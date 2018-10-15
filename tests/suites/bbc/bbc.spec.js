const ExplicitWait = require('../../../pageObject/ExplicitWait');

const URL = require('../../../config/URL');


describe('Check Web Elements', function() {

    it('Wait when element is displayed', async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get(URL.bbc);
        try {
            const explicitWait = new ExplicitWait();

            let searchField = await element(explicitWait.validElement);
            const result = await explicitWait.elementDisplayed(searchField, 10000);
            console.log(result);

        } catch(e) {
            console.log(e);
        }
    });
});
