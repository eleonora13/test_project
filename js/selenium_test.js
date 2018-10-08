const {Builder, By, Key} = require('selenium-webdriver');

const args = process.argv;
const browser = args[2];
const drivers = {
    'ie': 'MicrosoftEdge',
    'chrome': 'chrome',
    'firefox': 'firefox'
};
const driver = drivers[browser];

let createBrowserModule = (function () {
    let instance;

    let createInstance = function () {
        return new Builder().forBrowser(driver).build();
    };

    return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    }
}());

(async function runIeTest() {
    let driver = await createBrowserModule.getInstance();
        try {
            await driver.get('http://www.bbc.com/');
            let displayed = await driver.findElement(By.id('orb-search-q')).isDisplayed();
            let enabled = await driver.findElement(By.id('orb-search-q')).isEnabled();

            console.log(displayed, enabled);

            await driver.findElement(By.id('orb-search-q')).sendKeys('sport', Key.RETURN);
            await driver.findElement(By.xpath('//div[@id = \'orb-nav-links\']/ul/li[2]')).click();

            driver.sleep(3000);
        } catch (e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
})();




