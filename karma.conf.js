// Karma configuration
// Generated on Wed Mar 16 2016 12:18:07 GMT-0700 (PDT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // Load files from bower components and CDN
            /*'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',*/
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.2/angular.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.2/angular-route.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.2/angular-mocks.js',
            // Program files
            'app/js/*.js',
            'tests/*.js'
    ],


        // list of files to exclude
        exclude: [
    ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
