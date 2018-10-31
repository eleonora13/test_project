import {URL} from '../../../config/URL';
import {YandexHome} from "../../../pageObject/yandex_mail/YandexHome";
import {YandexMarketHome} from "../../../pageObject/yandex_additional/YandexMarketHome";
import {MarketSearchResults} from "../../../pageObject/yandex_additional/MarketSearchResults";
import {CompareElements} from "../../../pageObject/yandex_additional/CompareElements";
import {MarketFridges} from "../../../pageObject/yandex_additional/MarketFridges";
import {MarketCameras} from "../../../pageObject/yandex_additional/MarketCameras";
import {YandexLogin} from "../../../pageObject/yandex_mail/YandexLogin";
import {loginCredentials} from '../../../config/defaultCfg';
import {YandexMusic} from "../../../pageObject/yandex_additional/YandexMusic";


describe('verify additional modules on yandex web site', function () {

    const yandexHome = new YandexHome();
    const yandexMarketHome = new YandexMarketHome();
    const marketSearchResults = new MarketSearchResults();
    const compareElements = new CompareElements();
    const marketFridges = new MarketFridges();
    const marketCameras = new MarketCameras();
    const yandexLogin = new YandexLogin();
    const yandexMusic = new YandexMusic();

    browser.get(URL.yandex);

    it('verify adding elements to compare', async () => {
        allure.feature('Market');
        allure.severity('normal');

        await allure.createStep('search elements', async () => {
            await yandexHome.goToMarket();
            await yandexMarketHome.searchElements('Note 8');
        })();

        await allure.createStep('change the type of view', async () => {
            await marketSearchResults.changeViewType();
        })();

        const firstElementTitle = await marketSearchResults.getTitle(0);
        const secondElementTitle = await marketSearchResults.getTitle(1);

        await allure.createStep('add elements to compare', async () => {
            await marketSearchResults.addElementsToCompare(0);
            await marketSearchResults.addElementsToCompare(1);
            await marketSearchResults.goToComparePage();
        })();

        await allure.createStep('check that selected elements are added to compare', async () => {
            const firstElementInCompareTitle = await compareElements.checkElementsInCompare(0);
            const secondElementInCompareTitle = await compareElements.checkElementsInCompare(1);
            expect(firstElementTitle).to.equal(secondElementInCompareTitle);
            expect(secondElementTitle).to.equal(firstElementInCompareTitle);
        })();
    });

    it('verify removing elements from compare', async () => {
        allure.feature('Compare');
        allure.severity('normal');

        await allure.createStep('check that selected elements are removed', async () => {
            await compareElements.removeFromCompare();
            const emptyCompare = await compareElements.getTextFromEmptyCompare();
            expect(emptyCompare).to.include('Товаров нет');
        })();
    });

    it('verify the sorting based on the price', async () => {
        allure.feature('Sorting');
        allure.severity('small');

        await allure.createStep('sort elements based on the price', async () => {
            browser.get(URL.yandex);
            await yandexHome.goToMarket();
            await yandexMarketHome.goToElectronicsTab();
            await yandexMarketHome.goToActionCameraTab();
            await marketCameras.sortPrice();
            await marketCameras.sortPrice();
        })();

        await allure.createStep('check that elements are sorted based on the price', async () => {
            const orderResult = await marketCameras.checkPriceOrder();
            expect(orderResult).to.equal(true);
        })();
    });

    it('verify the sorting based on the tag', async () => {
        allure.feature('Sorting');
        allure.severity('small');

        const widthMax = 50;

        await allure.createStep('add tag', async () => {
            browser.get(URL.yandex);
            await yandexHome.goToMarket();
            await yandexMarketHome.goToAppliancesTab();
            await yandexMarketHome.goToFridgePage();
            await marketFridges.addWidthTag(widthMax);
        })();

        await allure.createStep('check that elements are sorted based on the added tag', async () => {

            const widthArrays = await marketFridges.getWidth(widthMax);
            const expectedLength = await marketFridges.getFridgeParamsLength();

            expect(widthArrays).to.equal(expectedLength);
        })();
    });

    it('verify yandex music albums', async () => {
        allure.feature('Music');
        allure.severity('normal');

        const expectedArtist = 'Metallica';

        await allure.createStep('precondition: log in', async () => {
            browser.get(URL.yandex);
            await yandexHome.goToLogin();
            await yandexLogin.logIn(loginCredentials.login, loginCredentials.pass);
        })();

        await allure.createStep('check the artist', async () => {
            browser.get(URL.yandex);
            await yandexHome.goToMusic();
            await yandexMusic.selectArtist('Metal');
            const artist = await yandexMusic.getArtist();
            expect(artist).to.equal(expectedArtist);
        })();

        await allure.createStep('check the popular albums artist', async () => {
            const albumnArtist = await yandexMusic.getAlbumnArtist(expectedArtist);
            expect(albumnArtist).to.equal(true);
        })();

    });

    it('verify play music functionality', async () => {
        allure.feature('Music');
        allure.severity('normal');

        await allure.createStep('check that music is play', async () => {
            browser.get(URL.yandex);
            await yandexHome.goToMusic();
            await yandexMusic.selectArtist('beyo');

            await yandexMusic.playSong();
            await browser.sleep(3000); // sleep for playing a song
            const iconPlayClass = await yandexMusic.getAttribute();
            expect(iconPlayClass).to.include('player-controls__btn_pause');

            await yandexMusic.stopSong();
            const iconPauseClass = await yandexMusic.getAttribute();
            expect(iconPauseClass).to.not.include('player-controls__btn_pause');
        })();

    });
});


