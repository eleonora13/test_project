import {helpers} from '../../helpers/helper_wait';

export class YandexHome {

    constructor() {
        this.goToMailButton = element(by.css('a.button.desk-notif-card__login-enter-expanded'));
        this.goToMailButtonText = element(by.css('a.desk-notif-card__login-enter-expanded span'));
        this.homeTabsBlock = element(by.css('div.home-tabs'));
        this.homeTabs = element.all(by.css('div.home-tabs a.home-tabs__search'));
        this.languageButton = element(by.css('div.headline__bar-items div.headline__bar-item.b-langs'));
        this.languageDropDown = element(by.css('div.b-menu-vert'));
        this.activeLanguageText = element(by.css('div.b-menu-vert li.b-menu__layout-vert-cell.b-menu__item_pos_first span span'));
        this.activeLanguage = element(by.css('div.b-menu-vert li.b-menu__layout-vert-cell.b-menu__item_pos_first'));
        this.actualLanguageText = element(by.css('div.headline__bar-items div.headline__bar-item.b-langs span span'));
    }

    async goToLogin() {
        await helpers.waitElementVisible(this.goToMailButton);
        await this.goToMailButton.click();
    }

    async checkLogout() {
        await helpers.waitElementVisible(this.goToMailButtonText);
        return await this.goToMailButtonText.getText();
    }

    async getTabs() {
        await helpers.waitElementVisible(this.homeTabsBlock);
        return await this.homeTabs.getText();
    }

    async checkTab(tabs, expectedUrl) {
        for (let i = 0; i < tabs.length; i++) {
            await helpers.waitElementVisible(element(by.linkText(tabs[i])));
            await element(by.linkText(tabs[i])).click();
            let currentUrl = await browser.getCurrentUrl();
            expect(currentUrl).to.contain(expectedUrl[i]);
            browser.navigate().back();
        }
    }

    async getLanguage() {
        await helpers.waitElementVisible(this.languageButton);
        await this.languageButton.click();
        await helpers.waitElementVisible(this.languageDropDown);
        let languageText = await this.activeLanguageText.getText();
        await this.activeLanguage.click();
        return languageText;
    }

    async getChangedLanguage() {
        await helpers.waitElementVisible(this.languageButton);
        return await this.actualLanguageText.getText();
    }

    async goToMarket() {
        await helpers.waitElementVisible(this.homeTabsBlock);
        await this.homeTabs.get(4).click();
    }

    async goToMusic() {
        await helpers.waitElementVisible(this.homeTabsBlock);
        await this.homeTabs.get(6).click();
    }
}