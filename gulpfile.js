'use strict'

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	useref = require('gulp-useref'),
	uglify = require('gulp-uglify'),
	gulpIf = require('gulp-if'),
	cssnano = require('gulp-cssnano'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	del = require('del'),
	plumber = require('gulp-plumber'),
	runSequence = require('run-sequence'),

	sassOptions = {
		outputStyle: 'expanded',
		errLogToConsole: true
	},
	postOptions = [autoprefixer({
		browsers: ["last 10 version"],
		cascade: false
	})];

// Development Tasks
// -----------------

gulp.task('sass', function () {
	return gulp.src('app/scss/*.scss')
		.pipe(sourcemaps.init())
			.pipe(sass(sassOptions))
			.pipe(postcss(postOptions))
		.pipe(sourcemaps.write('maps'))
	.pipe(gulp.dest('app/css'))
});

// Watcher
gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', ['sass'])
});

// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
gulp.task('useref', function () {
	return gulp.src('app/*.html')
		.pipe(plumber())
			.pipe(useref())
			.pipe(gulpIf('*.js', uglify()))
			.pipe(gulpIf('*.css', cssnano()))
		.pipe(plumber.stop())
	.pipe(gulp.dest('build'))
});

// Copying fonts
gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
	  .pipe(gulp.dest('build/fonts'))
})

// Copying assets
gulp.task('images', function () {
	return gulp.src('app/assets/**/*.*')
	.pipe(gulp.dest('build/assets'))
});

// Cleaning
gulp.task('clean', function () {
	return del.sync('build').then(function (cb) {
		return cache.clearAll(cb);
	});
})

gulp.task('clean:app', function () {
	return del.sync(['app/css/**/*.css', 'app/css/**/*.map']);
});

gulp.task('clean:build', function () {
	return del.sync(['build/**/*', '!build/assets', '!build/assets/**/*']);
});

// Build Sequences
// ---------------

gulp.task('default', function (callback) {
	runSequence(['sass', 'watch'],
		callback
	)
})

gulp.task('build', function (callback) {
	runSequence(
		'clean:build',
		'sass', ['useref', 'images', 'fonts'],
		//		'useref',
		callback
	)
})
