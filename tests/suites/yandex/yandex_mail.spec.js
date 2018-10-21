import {URL} from '../../../config/URL';
import {YandexLogin} from '../../../pageObject/yandex_mail/YandexLogin';
import {YandexHome} from '../../../pageObject/yandex_mail/YandexHome';
import {YandexMail} from "../../../pageObject/yandex_mail/YandexMail";
import {loginCredentials} from '../../../config/defaultCfg';

describe('verify yandex mail login/logout functionality', function () {

    let yandexLogin = new YandexLogin();
    let yandexHome = new YandexHome();
    let yandexMail = new YandexMail();

    browser.get(URL.yandex);

    it('user should be able to login with valid credentials', async () => {
        await yandexHome.goToLogin();
        await yandexLogin.logIn(loginCredentials.login, loginCredentials.pass);
        let userName = await yandexMail.getUserName();
        expect(userName).to.equal(loginCredentials.login);
    });

    it('user should be able to logout', async () => {
        await yandexMail.logOut();
        let userLogoutText = await yandexHome.checkLogout();
        expect(userLogoutText).to.equal('Войти в почту');
    });

    it('user should not be able to login with not valid password', async () => {
        await yandexHome.goToLogin();
        await yandexLogin.changeAccount();
        await yandexLogin.logIn(loginCredentials.login, loginCredentials.notValidPass);
        let passErrorText = await yandexLogin.checkNotValidPassError();
        expect(passErrorText).to.equal(loginCredentials.validationPassError);
    });

    it('user should not be able to login with not valid login', async () => {
        await yandexLogin.backToHomePage();
        await yandexHome.goToLogin();
        await yandexLogin.changeAccount();
        await yandexLogin.logIn(loginCredentials.notValidLogin, loginCredentials.pass);
        let loginErrorText = await yandexLogin.checkNotValidLoginError();
        expect(loginErrorText).to.equal(loginCredentials.validationLoginError);
    });

    it('check navigation to yandex Video, Images, News, Maps, Market, Translator, Music', async () => {
        await yandexLogin.backToHomePage();
        let tabList = await yandexHome.getTabs();
        await yandexHome.checkTab(tabList, URL.yandex_tabs);
    });

    it('check the language change', async () => {
        let expectedLanguage = await yandexHome.getLanguage();
        let actualLanguage = await yandexHome.getChangedLanguage();
        expect(expectedLanguage).to.equal(actualLanguage);
    });
});

