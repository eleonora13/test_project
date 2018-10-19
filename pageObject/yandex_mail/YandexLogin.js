import { helpers } from '../../helpers/helper_yandex';

export class YandexLogin {

    async logIn(login, pass) {
        helpers.waitElementClickable(by.css('div.passport-Domik-Content div.passport-Domik-Form-Field:nth-of-type(1) input.passport-Input-Controller'));
        await element(by.css('div.passport-Domik-Content div.passport-Domik-Form-Field:nth-of-type(1) input.passport-Input-Controller')).sendKeys(login);
        helpers.waitElementClickable(by.css('div.passport-Domik-Content div.passport-Domik-Form-Field:nth-of-type(2) input.passport-Input-Controller'));
        await element(by.css('div.passport-Domik-Content div.passport-Domik-Form-Field:nth-of-type(2) input.passport-Input-Controller')).sendKeys(pass);
        helpers.waitElementClickable(by.css('span.passport-Button-Text'));
        await element(by.css('span.passport-Button-Text')).click();
    }

    async changeAccount() {
        helpers.waitElementVisible(by.css('span.passport-Domik-Account-Item'));
        await element(by.css('span.passport-Domik-Account-Item a')).click();
    }

    async checkNotValidPassError (errorText) {
        helpers.waitElementVisible(by.css('div.passport-Domik-Form-Error_active'));
        return await element(errorText).getText();
    }

    async backToHomePage() {
        helpers.waitElementClickable('div.passport-Domik-Retpath a');
        await element(by.css('div.passport-Domik-Retpath a')).click();
    }

    async checkNotValidLoginError (errorText) {
        helpers.waitElementVisible(by.css('div.passport-Domik-Form-Error_active'));
        return await element(errorText).getText();
    }
}