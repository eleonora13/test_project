import {helpers} from "../../helpers/helper_yandex";

export class YandexMail {

    constructor() {
        this.userName = element(by.css('div.mail-User-Name'));
        this.userImage = element(by.css('#recipient-1'));
        this.userDropDown = element(by.css('#nb-4'));
        this.userDropDownOptions = element.all(by.css('#nb-4 div.b-user-dropdown-content a'));
    }

    async getUserName() {
        await helpers.waitElementVisible(this.userName);
        return await this.userName.getText();
    }

    async logOut() {
        await helpers.waitElementVisible(this.userImage);
        await this.userImage.click();
        await helpers.waitElementVisible(this.userDropDown);
        await this.userDropDownOptions.get(4).click();
    }
}