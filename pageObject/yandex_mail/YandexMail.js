import {helpers} from "../../helpers/helper_yandex";

export class YandexMail {
    async getUserName(username) {
        helpers.waitElementVisible(username);
        return await element(username).getText();
    }

    async logOut() {
        helpers.waitElementVisible(by.css('#recipient-1'));
        await element(by.css('#recipient-1')).click();
        helpers.waitElementVisible(by.css('#nb-4'));
        await element.all(by.css('#nb-4 div.b-user-dropdown-content a')).get(4).click();
    }
}