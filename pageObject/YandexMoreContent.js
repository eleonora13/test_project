class MoreContent {
    constructor () {
        this.settingsButton = by.css('a.link.i-bem.dropdown-menu__switcher span.link__inner');
        this.changeCity = by.css('div.i-bem.popup.dropdown-menu__popup.b-menu-vert__layout div.popup__content div:nth-of-type(3)');
        this.citySearchField = by.css('#city__front-input');
        this.backButton = by.css('a.button.form__back');
        this.moreButton = by.css('div.home-tabs a.home-tabs__more-switcher');
        this.moreDropdown = by.css('div.i-bem.popup.dropdown-menu__popup.dropdown-menu__popup_extra_yes');
        this.moreContent = by.css('div.home-tabs__more div.home-tabs__more-item');
    }

    async setCity(city) {
        await element(this.settingsButton).click();
        let until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(element(this.changeCity)), 5000);
        await element(this.changeCity).click();
        browser.wait(until.elementToBeClickable(element(this.citySearchField)), 5000);
        await element(this.citySearchField).clear();
        await element(this.citySearchField).sendKeys(city, protractor.Key.RETURN);
        browser.wait(until.presenceOf(element(this.backButton)), 5000);
        await element(this.backButton).click();
        browser.wait(until.presenceOf(element(this.moreButton)), 10000);
        await element(this.moreButton).click();
        browser.wait(until.presenceOf(element(this.moreDropdown)), 10000);
    }

    async checkMoreContent() {
        return element.all(this.moreContent).map(function (elm) {
            return elm.getText();
        });
    }
}

module.exports = MoreContent;
