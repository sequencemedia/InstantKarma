/* eslint-disable */

// Karma configuration

var path = require('path'),
	processCwd = process.cwd(),
	clientPath = path.resolve(processCwd, 'client'),
	assetsPath = path.resolve(processCwd, 'public/assets'),
	webpack = require('webpack'),
	isparta = require('isparta');

module.exports = function (config) {

	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: processCwd, // '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai', 'phantomjs-shim', 'es6-shim'],


		// list of files / patterns to load in the browser
		files: [
			'./karma.coverage.js'
		],


		plugins: [
			'karma-chai',
			'karma-chrome-launcher',
			'karma-coverage',
			'karma-es6-shim',
			'karma-mocha',
			'karma-phantomjs-launcher',
			'karma-phantomjs-shim',
			'karma-sourcemap-loader',
			'karma-spec-reporter',
			'karma-webpack'
		],


		// list of files to exclude
		exclude: ['node_modules', 'bower_components'],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'./karma.coverage.js': ['webpack', 'sourcemap']
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['spec', 'coverage'], // , 'progress', 'coverage'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,


		coverageReporter: {
			instrumenters: {
				isparta: isparta
			},
			instrumenter: {
				'**/*.js': 'isparta'
			}
		},


		// webpack configuration
		// nearly identical to webpack.conf.js
		webpack: {
			context: processCwd,
			devtool: 'sourcemap',
			module: {
				preLoaders: [
					{
						test: /\.js$/,
						loader: 'babel',
						exclude: [
							clientPath,
							/node_modules/,
							/bower_components/
						]
					}, {
						test: /\.js$/,
						loader: 'isparta',
						include: [
							clientPath,
						],
						exclude: [
							/spec\.js$/, // exclude test files from coverage
							/node_modules/,
							/bower_components/
						]
					}
				],
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
			},
			plugins: [
				new webpack.DefinePlugin({
					'process.env': {
						NODE_ENV: JSON.stringify('production')
					}
				}),
				new webpack.optimize.UglifyJsPlugin({
					mangle: false,
					preserveComments: false,
					warnings: false,
					output: false
				}),
				new webpack.ProvidePlugin({
					'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
				})
			]
		},
		webpackServer: {
			noInfo: true
		}

	});

};
