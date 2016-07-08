var path = require('path'),
	configFile = path.resolve(process.cwd(), 'karma.conf.js');

module.exports =  {
	jshint: {
		all: ['client/app/**/*.js']
	},
	karma: {
		run: {
			configFile: configFile,
    		action: 'run'
		},
		watch: {
			configFile: configFile,
			action: 'watch'
		}
	},
	webpack: {
		run: require(path.resolve(process.cwd(), 'webpack.conf.js'))
	}
};