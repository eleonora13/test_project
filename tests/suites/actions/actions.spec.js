import {URL} from '../../../config/URL';
import {Actions} from '../../../helpers/helper_actions';
import {helpers} from '../../../helpers/helper_wait.js';


describe('actions testing', function () {

    browser.get(URL.yandex_ru);

    const actions = new Actions();

    it('check actions: sendKeys', async () => {
        await actions.enterToField(element(by.css('input#text')), 'automation qa');
    });

    it('check actions: scroll', async () => {
        const footer = element(by.css('div.serp-footer__copyright-links'));
        await helpers.waitElementVisible(footer);
        await actions.scrollPage(footer);
    });

    it('check actions: click', async () => {
        await actions.clickElement(element(by.css('a.mobile-store-badge_platform_ios')));
    });
});
