require('babel-core/register');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        assertions: '../tests/suites/assertions/*spec.js',
        bbc: '../tests/suites/bbc/*spec.js',
        yandex: '../tests/suites/yandex/yandex.spec.js',
        yandex_market: '../tests/suites/yandex/yandex_market.spec.js'
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
        browser.ignoreSynchronization = true;
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
