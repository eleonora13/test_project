const helper = require('../../helpers/helper_yandex');
class YandexMoreContent {

    async goSettings() {
        await element(by.css('a.link.i-bem.dropdown-menu__switcher span.link__inner')).click();
    }

    async showMore() {
        helper.waitElementVisible(by.css('div.home-tabs a.home-tabs__more-switcher'));
        await element(by.css('div.home-tabs a.home-tabs__more-switcher')).click();

        helper.waitElementPresence(by.css('div.i-bem.popup.dropdown-menu__popup.dropdown-menu__popup_extra_yes'));
    }

    async checkMoreContent() {
        return element.all(by.css('div.home-tabs__more div.home-tabs__more-item')).map(function (elm) {
            return elm.getText();
        });
    }
}

module.exports = YandexMoreContent;
