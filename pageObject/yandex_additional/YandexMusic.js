import {helpers} from '../../helpers/helper_wait';

export class YandexMusic {

    constructor() {
        this.searchField = element(by.css('div.deco-input-wrapper_suggest input'));
        this.dropDown = element(by.css('div.d-suggest__popup-content.deco-popup-suggest-menu'));
        this.metallicaItem = element(by.css('div.d-suggest__item.d-suggest__item-artist:nth-of-type(2) a'));
        this.artistTitle = element(by.css('h1.page-artist__title.typo-h1_big'));
        this.popularAlbumns = element(by.css('div.page-artist__albums'));
        this.albumnsArtist = element.all(by.css('div.album__artist.deco-typo-secondary'));
        this.playIcon = element(by.css('button.button2_rounded.button-play.button-play__type_artist.local-icon-theme-white.page-artist__play'));
        this.icon = element(by.css('div.player-controls__btn.deco-player-controls__button.player-controls__btn_play'));
    }

    async selectArtist(artist) {
        await helpers.waitElementClickable(this.searchField);
        await this.searchField.sendKeys(artist);
        await helpers.waitElementPresence(this.dropDown);
        await this.metallicaItem.click();
    }

    async getArtist() {
        await helpers.waitElementPresence(this.artistTitle);
        return await this.artistTitle.getText();
    }

    async getAlbumnArtist(expectedArtist) {
        await helpers.waitElementPresence(this.popularAlbumns);
        let cntElements = await this.albumnsArtist.count();

        for (let i = 0; i < cntElements; i++) {
            let currElement = await this.albumnsArtist.get(i);
            let currTitle = await currElement.getText();

            if (currTitle.indexOf(expectedArtist) === -1) {
                return false;
            }
        }

        return true;
    }

    async playSong() {
        await helpers.waitElementPresence(this.playIcon);
        await browser.executeScript("arguments[0].scrollIntoView()", this.playIcon);
        await browser.actions().click(this.playIcon).perform();
    }

    async getAttribute() {
        await helpers.waitElementPresence(this.icon);
        return await this.icon.getAttribute('class');
    }

    async stopSong() {
        await this.playSong();
    }

}

