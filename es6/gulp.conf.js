/* eslint-disable */

var path = require('path'),
	configFile = path.resolve(process.cwd(), 'karma.conf.js');

module.exports =  {
	eslint: {
		all: ['client/app/**/*.js', '!node_modules/**', '!bower_components/**']
	},
	karma: {
		run: {
			configFile: configFile,
    		action: 'run'
		},
		watch: {
			configFile: configFile,
			action: 'watch'
		},
		coverage: {
			run: {
				configFile: path.resolve(process.cwd(), 'karma.coverage.conf.js'),
	    		action: 'run'
			}
		}
	},
	webpack: {
		run: require(path.resolve(process.cwd(), 'webpack.conf.js'))
	}
};