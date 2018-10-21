import {helpers} from '../../helpers/helper_yandex';

export class YandexLogin {
    constructor() {
        this.loginField = element(by.css('div.passport-Domik-Content div.passport-Domik-Form-Field:nth-of-type(1) input.passport-Input-Controller'));
        this.passField = element(by.css('div.passport-Domik-Content div.passport-Domik-Form-Field:nth-of-type(2) input.passport-Input-Controller'));
        this.loginButton = element(by.css('span.passport-Button-Text'));
        this.changeAccountButton = element(by.css('span.passport-Domik-Account-Item a'));
        this.validationErrorMessage = element(by.css('div.passport-Domik-Form-Error_active'));
        this.backToHomeButton = element(by.css('div.passport-Domik-Retpath a'));
    }

    async logIn(login, pass) {
        helpers.waitElementClickable(this.loginField);
        await this.loginField.sendKeys(login);
        helpers.waitElementClickable(this.passField);
        await this.passField.sendKeys(pass);
        helpers.waitElementClickable(this.loginButton);
        await this.loginButton.click();
    }

    async changeAccount() {
        helpers.waitElementVisible(this.changeAccountButton);
        await this.changeAccountButton.click();
    }

    async checkNotValidPassError() {
        helpers.waitElementVisible(this.validationErrorMessage);
        return await this.validationErrorMessage.getText();
    }

    async backToHomePage() {
        helpers.waitElementClickable(this.backToHomeButton);
        await this.backToHomeButton.click();
    }

    async checkNotValidLoginError() {
        helpers.waitElementVisible(this.validationErrorMessage);
        return await this.validationErrorMessage.getText();
    }
}