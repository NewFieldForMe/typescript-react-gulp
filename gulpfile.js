var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
    browserify({
        entries: ['src/app.tsx']
    })
    .plugin('tsify')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dest/js'))
});