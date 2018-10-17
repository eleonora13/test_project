import { URL } from '../../../config/URL';
import { YandexMarket } from '../../../pageObject/YandexMarket';

describe('check the functionality on the page', function() {
    it('elements should be filtered according to selected criterion', async () => {
        await browser.get(URL.yandex_market);

        let yandexMarket = new YandexMarket();
        await yandexMarket.checkCheckbox();
        browser.sleep(3000);

        await yandexMarket.uncheckCheckbox();
        browser.sleep(3000);

        await yandexMarket.setRadioButton();
        browser.sleep(3000);

        await yandexMarket.selectDropDown();
        browser.sleep(3000);

        await yandexMarket.scrollPage();
        browser.sleep(2000);

        await yandexMarket.fillPrice();
        browser.sleep(2000);

        let valueAttr = await yandexMarket.getAttributePrice('value');
        let classAttr = await yandexMarket.getAttributePrice('class');
        expect(valueAttr).toEqual('100');
        expect(classAttr).toContain('_2yK7W3SWQ-');
    });
});