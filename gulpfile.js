'use strict';

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
	browserSync = require('browser-sync').create(),

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

gulp.task('sass', function() {
    return gulp.src('app/scss/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass())
        .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

// Watcher
gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', ['sass'])
    gulp.watch(['app/js/*.js', 'app/*.html'])
                    .on('change', browserSync.reload)
});

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: './app'
		}
	});
});

// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
gulp.task('useref', function() {
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
gulp.task('images', function() {
    return gulp.src('app/assets/**/*.*')
        .pipe(gulp.dest('build/assets'))
});

gulp.task('copies', function () {
	return gulp.src(['app/php/*.php', 'app/js/*.min.js'])
	.pipe(gulpIf('*.js', gulp.dest('build/js')))
	.pipe(gulpIf('*.php', gulp.dest('build/')))
});

// Cleaning
gulp.task('clean', function() {
    return del.sync('build').then(function(cb) {
        return cache.clearAll(cb);
    });
});

gulp.task('clean:app', function() {
    return del.sync(['app/css/**/*.css', 'app/css/**/*.map']);
});

gulp.task('clean:build', function() {
    return del.sync(['build/**/*', '!build/assets', '!build/assets/**/*']);
});

gulp.task('sass-build', function() {
    return gulp.src('app/scss/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass(sassOptions))
            .pipe(postcss(postOptions))
        .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('app/css'))
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
    runSequence(
        ['sass', 'watch'],
        'browser-sync',
        callback
    )
});

gulp.task('build', function(callback) {
    runSequence(
        'clean:build',
        'sass-build', ['useref', 'images', 'fonts'],
        'copies',
        //		'useref',
        callback
    )
})
