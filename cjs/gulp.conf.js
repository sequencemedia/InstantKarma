module.exports =  {
	jshint: {
		all: ['client/app/**/*.js']
	},
	karma: {
		run: {
			configFile: 'karma.conf.js',
			action: 'run'
		},
		watch: {
			configFile: 'karma.conf.js',
			action: 'watch'
		}
	}
};