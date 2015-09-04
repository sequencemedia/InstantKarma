var gulp = require('gulp'),
	path = require('path'),
	config = require('./gulp.conf'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	server = require('gulp-develop-server'),
	karma = require('gulp-karma');

gulp.task('default', ['watch', 'server', 'watch-server', 'lint', 'test'], function () {

});

gulp.task('lint', function () {
	return gulp.src(config.jshint.all)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function () {
	return gulp.src([])
		.pipe(karma(config.karma.run))
		.on('error', function (err) {
			this.emit('end', err);
		});
});

gulp.task('server', function () {
	server.listen({ path: 'app' });
});

gulp.task('watch', function () {
	gulp
		.watch(config.jshint.all, ['lint']);
});

gulp.task('watch-server', function () {
	gulp
		.watch(['app'], server.restart);
});
