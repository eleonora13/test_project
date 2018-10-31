import {helpers} from '../../helpers/helper_wait';

export class CompareElements {

    constructor() {
        this.elementInCompare = element.all(by.css('div.n-compare-content__line div.n-compare-cell'));
        this.removeButton = element(by.css('span.n-compare-toolbar__action-clear'));
        this.emptyCompare = element(by.css('div.title_size_18'));
    }

    async checkElementsInCompare(elementNum) {
        await helpers.waitElementVisible(this.elementInCompare.get(elementNum));
        return await this.elementInCompare.get(elementNum).element(by.css('a.n-compare-head__name')).getText();
    }

    async removeFromCompare() {
        await helpers.waitElementVisible(this.removeButton);
        await this.removeButton.click();
    }

    async getTextFromEmptyCompare() {
        await helpers.waitElementVisible(this.emptyCompare);
        return await this.emptyCompare.getText();
    }
}