// Karma configuration

module.exports = function (config) {
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
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'node_modules/bardjs/dist/bard.js',
			/*
				Angular components
			*/
			'client/app/angular/**/*.module.js',
			'client/app/angular/**/*.routes.js',
			'client/app/angular/**/*.controller.js',
			/*
				Vanilla Components
			*/
			'client/app/vanilla/**/*.js',
			/*
				Specs
			*/
			{ pattern: 'client/app/**/*.spec.js', included: true }
		],


		plugins: [
			'karma-chai',
			'karma-chai-sinon',
			'karma-commonjs',
			'karma-mocha',
			'karma-phantomjs-launcher',
			'karma-requirejs',
			'karma-spec-reporter'
		],


		// list of files to exclude
		exclude: ['node_modules'],


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['spec'], // , 'progress', coverage'],


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