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
		frameworks: ['mocha', 'requirejs', 'chai', 'chai-sinon'],


		// list of files / patterns to load in the browser
		files: [
			/*
				Always
			*/
			'test-main.js',
			'node_modules/phantomjs-polyfill/bind-polyfill.js',
			/*
				Specs
			*/
			{ pattern: 'client/app/**/*.spec.js', included: false }
		],


		plugins: [
			'karma-chai',
			'karma-chai-sinon',
			'karma-commonjs',
			'karma-mocha',
			'karma-phantomjs-launcher',
			'karma-requirejs',
			'karma-spec-reporter',
			'karma-webpack'
		],


		// list of files to exclude
		exclude: ['node_modules'],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'client/app/**/*.js': ['webpack']
		},


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
		singleRun: false,

		// webpack configuration
		// nearly identical to webpack.conf.js
		webpack: {
			context: processCwd,
			devtool: 'source-map',
			entry: [
				path.resolve(clientPath, 'app/vanilla/app')
			],
			output: {
				path: path.resolve(assetsPath),
				filename: '[name].js',
				publicPath: path.resolve(assetsPath)
			},
			node: {
				console: true,
				fs: 'empty',
				net: 'empty',
				tls: 'empty'
			},
			resolve: {
			    extensions: ['', '.js'] // empty string is ESSENTIAL
			},
			module: {
			    loaders: [
			    	{
						test: /\.js?$/,
						exclude: [
							/node_modules/,
							/bower_components/
						],
			       		loader: 'babel-loader',
						query: {
							presets: [
								'es2015',
								'stage-0',
								'stage-1',
								'react'
							],
							plugins: [
								'transform-runtime',
								'transform-class-properties',
								'transform-object-rest-spread'
							]
						}
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
					preserveComments: false
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
