exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        assertions: '../js/suites/assertions/*spec.js',
        bbc: '../js/suites/bbc/*spec.js'
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
