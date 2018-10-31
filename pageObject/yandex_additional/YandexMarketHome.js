import {helpers} from '../../helpers/helper_wait';

export class YandexMarketHome {

    constructor() {
        this.searchField = element(by.css('#header-search'));
        this.appliancesTab = element(by.css('div.topmenu li.topmenu__item:nth-of-type(3)'));
        this.fridgeTab = element(by.css('div.topmenu li.topmenu__item:nth-of-type(3) a.topmenu__subitem:nth-of-type(1)'));
        this.fridgeHeader = element(by.css('div.catalog-menu__item:nth-of-type(1) a'));
        this.electronicsTab = element(by.css('div.topmenu li.topmenu__item:nth-of-type(1)'));
        this.cameraTab = element(by.css('div.topmenu li.topmenu__item:nth-of-type(1) div a:nth-of-type(4)'));
        this.actionCameraHeader = element(by.css('div.catalog-menu__item:nth-of-type(3) a'));
    }

    async searchElements(text) {
        await helpers.waitElementClickable(this.searchField);
        await this.searchField.sendKeys(text, protractor.Key.ENTER);
    }

    async goToElectronicsTab() {
        await browser.actions().mouseMove(this.electronicsTab).perform();
        await helpers.waitElementPresence(this.appliancesTab);
        await helpers.waitElementPresence(this.cameraTab);
        await browser.actions().mouseUp(this.cameraTab).click().perform();
    }

    async goToActionCameraTab() {
        await helpers.waitElementVisible(this.actionCameraHeader);
        await this.actionCameraHeader.click();
    }

    async goToAppliancesTab() {
        await browser.actions().mouseMove(this.appliancesTab).perform();
        await helpers.waitElementPresence(this.appliancesTab);
        await helpers.waitElementPresence(this.fridgeTab);
        await browser.actions().mouseUp(this.fridgeTab).click().perform();
    }

    async goToFridgePage() {
        await helpers.waitElementVisible(this.fridgeHeader);
        await this.fridgeHeader.click();
    }
}