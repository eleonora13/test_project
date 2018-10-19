import { helpers } from '../../helpers/helper_yandex';

export class YandexHome {

    async goToLogin() {
        helpers.waitElementVisible(by.css('a.button.desk-notif-card__login-enter-expanded'));
        await element(by.css('a.button.desk-notif-card__login-enter-expanded')).click();
    }

    async checkLogout(logoutText) {
        helpers.waitElementVisible(logoutText);
        return await element(logoutText).getText();
    }

    async getTabs() {
        helpers.waitElementVisible(by.css('div.home-tabs'));
        return await element.all(by.css('div.home-tabs a.home-tabs__search')).getText();
    }

    async checkTab(tabs, expectedUrl) {
        for(let i =0; i < tabs.length; i++) {
            helpers.waitElementVisible(element(by.linkText(tabs[i])));
            await element(by.linkText(tabs[i])).click();
            let currentUrl = await browser.getCurrentUrl();
            expect(currentUrl).to.contain(expectedUrl[i]);
            browser.navigate().back();
        }
    }

    async setLanguage() {
        helpers.waitElementVisible(by.css('div.headline__bar-items div.headline__bar-item.b-langs'));
        await element(by.css('div.headline__bar-items div.headline__bar-item.b-langs')).click();
        helpers.waitElementVisible(by.css('div.b-menu-vert'));
        browser.sleep(3000);
        let languageText = await element(by.css('div.b-menu-vert li.b-menu__layout-vert-cell.b-menu__item_pos_first span span')).getText();
        await element(by.css('div.b-menu-vert li.b-menu__layout-vert-cell.b-menu__item_pos_first')).click();
        browser.sleep(3000);
        return languageText;
    }

    async getChangedLanguage() {
        helpers.waitElementVisible(by.css('div.headline__bar-items div.headline__bar-item.b-langs'));
        return await element(by.css('div.headline__bar-items div.headline__bar-item.b-langs span span')).getText();
    }

}