exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['../js/bbc.js', '../js/assertions.js'],
    specs: ['../js/assertions.js'],
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
