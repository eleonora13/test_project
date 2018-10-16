const YandexMoreContent = require('../../../pageObject/Yandex/YandexMoreContent');

const YandexSetCountry = require('../../../pageObject/Yandex/YandexSetCountry');

const URL = require('../../../config/URL');

describe('check the content of more element', function() {
    it('More content should be the same for London and Paris', async () => {

        await browser.waitForAngularEnabled(false);
        await browser.get(URL.yandex);

        const yandexMoreContent = new YandexMoreContent();
        const yandexSetCountry = new YandexSetCountry;

        await yandexMoreContent.goSettings();
        await yandexSetCountry.setCity('Лондон');
        await yandexMoreContent.showMore();
        let contentLondon = await yandexMoreContent.checkMoreContent();

        await yandexMoreContent.goSettings();
        await yandexSetCountry.setCity('Paris');
        await yandexMoreContent.showMore();
        let contentParis = await yandexMoreContent.checkMoreContent();

        expect(contentLondon).toEqual(contentParis);
    });
});
