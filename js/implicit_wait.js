function ElementNotFoundException(message) {
    this.message = message;
    this.name = "ElementNotFoundException";
}


describe('Check Web Elements', function() {
    it('Wait when element is displayed', async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://www.bbc.com/');
        try {
            async function elementDisplayed(testElement, timeout) {
                let internalTimer = 500;

                while (await !testElement.isPresent() || await !testElement.isDisplayed()) {
                    if (!timeout) {
                        throw new ElementNotFoundException('Element not found');
                    } else {
                        await browser.sleep(internalTimer);
                        timeout -= internalTimer;
                    }
                }

                return true;
            }

            let searchField = await element(By.css('#orb-search-q'));
            const result = await elementDisplayed(searchField, 10000);
            console.log(result);

        } catch(e) {
            console.log(e);
        }
    });
});
