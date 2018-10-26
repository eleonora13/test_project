export class YandexTest {

    async performClick() {
        let element = document.getElementsByClassName('home-tabs__search')[2];
        element.click();
    }

    async performSearch() {
        document.getElementsByClassName('input__control')[0].value = 'automation qa';
    }
}