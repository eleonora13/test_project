import {helpers} from '../../helpers/helper_wait';

export class MarketSearchResults {

    constructor() {
        this.viewTypeButton = element(by.css('label.radio-button__radio_side_right input'));
        this.searchResultsList = element(by.css('div.n-snippet-list_type_vertical'));
        this.addToCompareIcon = element.all(by.css('div.n-snippet-list_type_vertical div.n-snippet-card2 .n-product-toolbar__item.n-user-lists_type_compare'));
        this.compareButton = element(by.css('a.header2-menu__item_type_compare .header2-menu__icon-wrap'));
        this.elementTitle = element.all(by.css('div.n-snippet-list_type_vertical div.n-snippet-card2 div.n-snippet-card2__title a.n-link_theme_blue'));
    }

    async changeViewType() {
        await helpers.waitElementPresence(this.viewTypeButton);
        await this.viewTypeButton.click();
    }

    async getTitle(elementNum) {
        await helpers.waitElementVisible(this.searchResultsList);
        return await this.elementTitle.get(elementNum).getText();
    }

    async addElementsToCompare(elementNum) {
        await browser.actions().mouseDown(this.addToCompareIcon.get(elementNum)).click().perform();
    }

    async goToComparePage() {
        await helpers.waitElementVisible(this.compareButton);
        await this.compareButton.click();
    }
}