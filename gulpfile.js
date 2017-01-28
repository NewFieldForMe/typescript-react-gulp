var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var babelify = require('babelify');

gulp.task('build', function() {
    browserify({
        entries: ['src/app.tsx']
    })
    .plugin(tsify, { target: 'es6' })
    .transform(babelify, { extensions: [ '.tsx', '.ts' ] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dest/js'))
});