import {helpers} from '../../helpers/helper_wait';

export class MarketCameras {

    constructor() {
        this.priceSortIcon = element(by.css('div.n-filter-block_pos_left div.n-filter-sorter_js_inited:nth-of-type(3)'));
        this.prices = element.all(by.css('div.n-snippet-cell2__main-price-wrapper'));
        this.sortedLastElement = element(by.css('div.n-snippet-list_type_grid.snippet-list_size_3 div.n-snippet-cell2.b-spy-visible.n-snippet-cell2_type_product:last-child'));
    }

    async sortPrice() {
        await helpers.waitElementPresence(this.priceSortIcon);
        await this.priceSortIcon.click();
    }

    async checkPriceOrder() {
        await helpers.waitElementPresence(this.sortedLastElement);
        let cntElements = await this.prices.count();

        for (let i = 0; i < cntElements; i++) {
            let currPriceEl = await this.prices.get(i);
            let currPrice = this.getPriceAmount(currPriceEl);

            if (i !== 0) {
                let prevPos = i - 1;
                let prePriceEl = await this.prices.get(prevPos);
                let prevPrice = this.getPriceAmount(prePriceEl);

                if (currPrice > prevPrice) {
                    return false;
                }
            }
        }

        return true;
    }

    async getPriceAmount(element) {
        let prePriceText = await element.getText();
        let prevPrice = await prePriceText.split('₽')[0].replace(/\s/g, '');

        if (prevPrice.substr(0, 2) === 'от') {
            prevPrice = await prevPrice.substr(2);
        }

        return prevPrice;
    }
}
