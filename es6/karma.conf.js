/* eslint-disable */

// Karma configuration

var path = require('path'),
	processCwd = process.cwd(),
	clientPath = path.resolve(processCwd, 'client'),
	assetsPath = path.resolve(processCwd, 'public/assets'),
	webpack = require('webpack');

module.exports = function (config) {

	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: processCwd, // '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai', 'sinon', 'phantomjs-shim', 'es6-shim'],


		// list of files / patterns to load in the browser
		files: [
			/*
				Always
			*/
			'node_modules/phantomjs-polyfill/bind-polyfill.js',
			/*
				Specs
			*/
			'client/app/**/*.spec.js'
		],


		plugins: [
			'karma-chai',
			'karma-es6-shim',
			'karma-mocha',
			'karma-phantomjs-launcher',
			'karma-phantomjs-shim',
			'karma-sinon',
			'karma-sourcemap-loader',
			'karma-spec-reporter',
			'karma-webpack'
		],


		// list of files to exclude
		exclude: ['node_modules', 'bower_components'],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'client/app/**/*.js': ['webpack', 'sourcemap']
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['spec'], //, ['spec', 'progress', coverage'],


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
		singleRun: false,


		// webpack configuration
		// for babel
		webpack: {
			devtool: 'sourcemap',
			module: {
				loaders: [
					{
						test: /\.js?$/,
						loader: 'babel',
						exclude: [
							/node_modules/,
							/bower_components/
						]
					}
				]
			}
		},
		webpackServer: {
			noInfo: true
		}

	});

};
