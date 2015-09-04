// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs', 'chai', 'chai-sinon'],


    // list of files / patterns to load in the browser
    files: [
      /*
        Always
      */
      'test-main.js',
      /*
        Always for Angular
      */
      //'node_modules/angular/angular.js',
      //'node_modules/angular-mocks/angular-mocks.js',
      //'node_modules/bardjs/dist/bard.js',
      /*
        Angular components
      */
      //'client/app/**/*.module.js',
      //'client/app/**/*.routes.js',
      //'client/app/**/*.controller.js',
      /*
        Everything else
      */
      'client/app/**/*.js',
      'server/app/**/*.js',
      /*
        Specs
      */
      { pattern: 'client/app/**/*.spec.js', included: true },
      { pattern: 'server/app/**/*.spec.js', included: true }
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};