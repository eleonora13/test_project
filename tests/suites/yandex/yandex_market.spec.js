import { URL } from '../../../config/URL';
import { YandexMarket } from '../../../pageObject/YandexMarket';

describe('check the functionality on the page', function() {
    it('elements should be filtered according to selected criterion', async () => {
        await browser.get(URL.yandex_market);

        let yandexMarket = new YandexMarket();

        await yandexMarket.checkCheckbox();
        await yandexMarket.uncheckCheckbox();
        await yandexMarket.setRadioButton();
        await yandexMarket.selectDropDown();
        await yandexMarket.scrollPage();
        await yandexMarket.fillPrice();

        let valueAttr = await yandexMarket.getAttributePrice('value');
        let classAttr = await yandexMarket.getAttributePrice('class');
        expect(valueAttr).toEqual('100');
        expect(classAttr).toContain('_2yK7W3SWQ-');
    });
});