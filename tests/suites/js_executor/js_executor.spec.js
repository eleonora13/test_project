import {URL} from '../../../config/URL';
import {helpers} from '../../../helpers/helper_wait.js';
import {YandexTest} from "../../../pageObject/yandex/YandexTest";


describe('js executor testing', function () {

    browser.get(URL.yandex_ru);

    const yandexTest = new YandexTest();

    it('check row JS: click', async () => {
        await browser.executeScript(yandexTest.performClick);
    });

    it('check row JS: sendKeys', async () => {
        await helpers.waitElementClickable(element(by.css('input.input__control')));
        await browser.executeScript(yandexTest.performSearch);
    });
});
