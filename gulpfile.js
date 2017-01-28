var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
    browserify({
        entries: ['src/main.tsx']
    })
    .plugin('tsify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dest/js'))
});