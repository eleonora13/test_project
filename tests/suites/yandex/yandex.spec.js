const MoreContent = require('../../../pageObject/yandexMoreContent');

const URL = require('../../../config/URL');

const Singleton = require('../../../pattern/singleton');


describe('check the content of more element', function() {
    it('More content should be the same for London and Paris', async () => {
        const instance = new Singleton();
        await instance.waitForAngularEnabled(false);
        await instance.get(URL.yandex);
        try {

            const moreContent = new MoreContent();

            await moreContent.setCity('Лондон');
            let contentLondon = await moreContent.checkMoreContent();

            await moreContent.setCity('Paris');
            let contentParis = await moreContent.checkMoreContent();

            expect(contentLondon).toEqual(contentParis);

        } catch(e) {
            console.log(e);
        }
    });
});
