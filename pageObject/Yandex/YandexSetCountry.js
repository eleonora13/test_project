const helper = require('../../helpers/helper_yandex');

class YandexSetCountry {

    async setCity(city) {

        helper.waitElementPresence(by.css('div.i-bem.popup.dropdown-menu__popup.b-menu-vert__layout div.popup__content div:nth-of-type(3)'));
        await element(by.css('div.i-bem.popup.dropdown-menu__popup.b-menu-vert__layout div.popup__content div:nth-of-type(3)')).click();

        helper.waitElementClickable(by.css('#city__front-input'));
        await element(by.css('#city__front-input')).clear();
        await element(by.css('#city__front-input')).sendKeys(city, protractor.Key.INSERT);
        helper.waitElementVisible(by.css('ul.popup__items.input__popup-items'));
        helper.waitElementPresence(by.css('li.b-autocomplete-item.b-autocomplete-item_subtype_region:nth-of-type(1)'));
        await element(by.css('li.b-autocomplete-item.b-autocomplete-item_subtype_region:nth-of-type(1)')).click();
    }
}

module.exports = YandexSetCountry;