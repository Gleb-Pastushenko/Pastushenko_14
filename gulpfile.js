'use strict';

var gulp = require('gulp'),
    scss = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('styles', function () {
    return gulp.src('./sass/main.scss')
        .pipe(plumber({ errorHandler: handleError }))
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});
gulp.task('js', function() {
    return gulp.src('./source-js/**/*.js')
        .pipe(plumber({ errorHandler: handleError }))
        .pipe(sourcemaps.init())
        .pipe(babel({compact: true}))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./js'));
});

gulp.task('watch', ['styles', 'js'], function () {
    gulp.watch('./sass/**/*.scss', ['styles']);
    gulp.watch('./source-js/**/*.js', ['js']);
});

gulp.task('default', ['styles', 'js'], function () {

});