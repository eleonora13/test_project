import {helpers} from '../../helpers/helper_wait';

export class MarketFridges {

    constructor() {
        this.widthInput = element(by.css('div._2Hue1bCg-N:nth-of-type(10) li._1W_iTekL7P:nth-of-type(2) input'));
        this.sortedResults = element(by.css('div.layout__col_search-results_normal'));
        this.firstFridgeParam = element(by.css('div.n-snippet-list_type_vertical.b-spy-init  div.n-snippet-card2.b-spy-visible:last-child'));
        this.fridgeParams = element.all(by.css('ul.n-snippet-card2__desc_type_list li:nth-of-type(1)'));
    }

    async addWidthTag(widthMax) {
        await helpers.waitElementClickable(this.widthInput);
        await this.widthInput.sendKeys(widthMax);
        await helpers.waitElementPresence(this.sortedResults);
    }

    async getFridgeParamsLength() {
        await helpers.waitElementPresence(this.fridgeParams);
        return await this.fridgeParams.count();
    }

    async getWidth(widthMax) {
        await helpers.waitElementPresence(this.firstFridgeParam);
        const arr = [];
        await this.fridgeParams.filter(async (element) => {
            let text = await element.getText();
            let width = await +text.split('x')[0];
            if (width <= widthMax) {
                arr.push(width);
            }
        });
        return arr.length;
    }
}
