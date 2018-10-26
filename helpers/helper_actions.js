import {helpers} from '../helpers/helper_wait';

export class Actions {

    async enterToField(field, text) {
        await helpers.waitElementClickable(field);
        await browser.actions().sendKeys(text, protractor.Key.ENTER).perform();
    }

    async scrollPage(element) {
        await browser.actions().mouseMove(element).perform();
    }

    async clickElement(element) {
        await helpers.waitElementClickable(element);
        await browser.actions().click(element);
    }
}
