import { helpers } from '../helpers/helper_yandex';

export class YandexMarket {

    async checkCheckbox() {
        let checkboxS = await element.all(by.css('div._178jz2CyDL div._2Hue1bCg-N:nth-of-type(4) a')).get(1).click();
        helpers.waitElementSelected(checkboxS);
    }

    async uncheckCheckbox() {
        let checkboxU = await element.all(by.css('div._178jz2CyDL div._2Hue1bCg-N:nth-of-type(4) a')).get(1).click();
        helpers.waitElementNotSelected(checkboxU);
    }

    async setRadioButton() {
        await browser.actions().mouseMove(element(by.css('li._2gBbJONjvk'))).perform();
        let radioButton = await element.all(by.css('li._2gBbJONjvk label')).get(2).click();
        helpers.waitElementSelected(radioButton);
    }

    async selectDropDown() {
        await browser.actions().mouseMove(element(by.css('button.button_arrow_down.button_size_s'))).perform();
        await element(by.css('button.button_arrow_down.button_size_s')).click();
        helpers.waitElementVisible(by.css('div.popup_direction_down'));
        let dropDownItem = await element.all(by.css('div.popup_direction_down div.select__item')).get(0).click();
        helpers.waitElementSelected(dropDownItem);
    }

    async scrollPage() {
        await browser.actions().mouseMove(element(by.css('div.footer-market__promo-buttons a.link.i-bem:nth-of-type(1) img'))).perform();
    }

    async fillPrice() {
        await browser.actions().mouseMove(element(by.css('fieldset._38PayafmjD'))).perform();
        await element.all(by.css('div._16hsbhrgAf li._3E2Wzu8o3H:nth-of-type(1) input')).get(0).sendKeys('100');
    }

    async getAttributePrice (attribute) {
        return await element.all(by.css('div._16hsbhrgAf li._3E2Wzu8o3H:nth-of-type(1) input')).get(0).getAttribute(attribute);
    }
}