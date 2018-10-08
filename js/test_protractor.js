describe('Check Web Elements', function() {
    it('Search field should be Displayed and Enabled', async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://www.bbc.com/');
        (async function checkVisibility() {
            let displayed = await element(By.css('#orb-search-q')).isDisplayed();
            let enabled = await element(By.css('#orb-search-q')).isEnabled();
            console.log(displayed, enabled);
        })();

        (async function navigationCheck() {
            await element(By.css('#orb-search-q')).sendKeys('sport', protractor.Key.RETURN);
            await element(By.xpath('//div[@id = \'orb-nav-links\']/ul/li[2]')).click();
        })();

    });

});

