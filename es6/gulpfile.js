/* eslint-disable */

var gulp = require('gulp'),
	path = require('path'),
	srcPath = path.resolve(__dirname, 'client/src'),
	serverPath = path.resolve(__dirname, 'server'),
	assetsPath = path.resolve(__dirname, 'public/assets'),
	config = require('./gulp.conf'),
	eslint = require('gulp-eslint'),
	server = require('gulp-develop-server'),
	webpack = require('webpack-stream'),
	karma = require('karma');

gulp
	.task('default', ['webpack', 'watch', 'server', 'watch-server', 'lint', 'test-coverage'], function () {

	})
	.task('webpack', function () {
		return gulp.src([])
			.pipe(webpack(config.webpack.run))
			.pipe(gulp.dest(path.resolve(assetsPath, 'js/app/')));
	})
	.task('watch', function () {
		gulp
			.watch(config.eslint.all, ['lint', 'test']);
	})
	.task('server', function () {
		server.listen({ path: 'app' });
	})
	.task('watch-server', function () {
		gulp
			.watch(['app.js'], server.restart);
	})
	.task('lint', function () {
		return gulp.src(config.eslint.all)
			.pipe(eslint())
			.pipe(eslint.format());
	})
	.task('test', function (next) {
		(new karma.Server(config.karma.run, next))
			.start();
	})
	.task('test-coverage', function (next) {
		(new karma.Server(config.karma.coverage.run, next))
			.start();
	});
