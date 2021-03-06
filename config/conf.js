require('babel-core/register');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        assertions: '../tests/suites/assertions/*spec.js',
        bbc: '../tests/suites/bbc/*spec.js',
        yandex: '../tests/suites/yandex/yandex.spec.js',
        yandex_market: '../tests/suites/yandex/yandex_market.spec.js',
        yandex_mail: '../tests/suites/yandex/yandex_mail.spec.js',
        actions: '../tests/suites/actions/actions.spec.js',
        row_js: '../tests/suites/js_executor/js_executor.spec.js',
        yandex_additional: '../tests/suites/yandex/yandex_additional.spec.js'
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 500000
    },
    reporters: ['allure'],
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        let chai, chaiAsPromised;

        chai = require('chai');
        chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);

        const assertArrays = require('chai-arrays');
        chai.use(assertArrays);

        chai.use(require('chai-string'));

        global.chai = chai;
        global.expect = chai.expect;
        global.assert = chai.assert;

        const AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'C:\\Users\\Elia\\Desktop\\test_project\\allure-results'
        }));
    },
    multiCapabilities: [
        {
            browserName: 'chrome'
        }, /*{
            browserName: 'firefox'
        }, {
            browserName: 'MicrosoftEdge'
        }*/
    ]
};
