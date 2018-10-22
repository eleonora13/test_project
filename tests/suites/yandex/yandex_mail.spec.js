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
        allure.feature('Login');
        allure.severity('normal');

        await allure.createStep('login', async function () {
            await yandexHome.goToLogin();
            await yandexLogin.logIn(loginCredentials.login, loginCredentials.pass);
        })();

        await allure.createStep('check the correctness of the username', async function () {
            const userName = await yandexMail.getUserName();
            expect(userName).to.equal(loginCredentials.login);
        })();
    });

    it('user should be able to logout', async () => {
        allure.feature('Logout');
        allure.severity('normal');

        await allure.createStep('check that user is logged out from the yandex mail', async function () {
            await yandexMail.logOut();
            const userLogoutText = await yandexHome.checkLogout();
            expect(userLogoutText).to.equal('Войти в почту');
        })();
    });

    it('user should not be able to login with not valid password', async () => {
        allure.feature('Login');
        allure.severity('normal');

        await allure.createStep('enter not valid password', async function () {
            await yandexHome.goToLogin();
            await yandexLogin.changeAccount();
            await yandexLogin.logIn(loginCredentials.login, loginCredentials.notValidPass);
        })();

        await allure.createStep('check the validation error message that is displayed when user tries to login with not valid password', async function () {
            const passErrorText = await yandexLogin.getNotValidPassError();
            expect(passErrorText).to.equal(loginCredentials.validationPassError);
        })();
    });

    it('user should not be able to login with not valid login', async () => {
        allure.feature('Login');
        allure.severity('normal');

        await allure.createStep('enter not valid login', async function () {
            await yandexLogin.backToHomePage();
            await yandexHome.goToLogin();
            await yandexLogin.changeAccount();
            await yandexLogin.logIn(loginCredentials.notValidLogin, loginCredentials.pass);
        })();

        await allure.createStep('check the validation error message that is displayed when user tries to login with not valid login', async function () {
            const loginErrorText = await yandexLogin.getNotValidLoginError();
            expect(loginErrorText).to.equal(loginCredentials.validationLoginError);
        })();
    });

    it('check tabs navigation', async () => {
        allure.feature('Navigation');
        allure.severity('minor');

        await allure.createStep('check navigation from Login to Home page', async function () {
            await yandexLogin.backToHomePage();
        })();

        await allure.createStep('check navigation to yandex Video, Images, News, Maps, Market, Translator, Music views', async function () {
            const tabList = await yandexHome.getTabs();
            await yandexHome.checkTab(tabList, URL.yandex_tabs);
        })();
    });

    it('check the language change', async () => {
        allure.feature('Settings: language');
        allure.severity('minor');

        await allure.createStep('change language', async function () {
            const expectedLanguage = await yandexHome.getLanguage();
            const actualLanguage = await yandexHome.getChangedLanguage();
            expect(expectedLanguage).to.equal(actualLanguage);
        })();
    });
});

