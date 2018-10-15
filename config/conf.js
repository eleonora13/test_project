exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        assertions: '../tests/suites/assertions/*spec.js',
        bbc: '../tests/suites/bbc/*spec.js',
        yandex: '../tests/suites/yandex/*spec.js'
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
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
