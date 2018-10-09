class ExplicitWait {
    constructor () {
        this.validElement = by.css('#orb-search-q');
        this.notValidElement = by.css('#orb-search-q13');
    }

    async elementDisplayed(testElement, timeout) {
        let internalTimer = 500;
        let elementIsPresent = await testElement.isPresent();

        while (!elementIsPresent) {
            console.log(timeout);
            if (!timeout) {
                throw new ElementNotFoundException('Element not found');
            } else {
                await browser.sleep(internalTimer);
                timeout -= internalTimer;
                elementIsPresent = await testElement.isPresent();
            }
        }

        let elementIsDisplayed = await testElement.isDisplayed();

        while (!elementIsDisplayed) {
            console.log(timeout);
            if (!timeout) {
                throw new ElementNotFoundException('Element not found');
            } else {
                await browser.sleep(internalTimer);
                timeout -= internalTimer;
                elementIsDisplayed = await testElement.isDisplayed();
            }

        }

        return true;
    }
}

function ElementNotFoundException(message) {
    this.message = message;
    this.name = "ElementNotFoundException";
}

module.exports = ExplicitWait;


