var gulp = require('gulp');

var less = require('gulp-less');

gulp.task('compile-less', function() {
    gulp.src('less/main.less')
        .pipe(less())
        .pipe(gulp.dest('public/'));
});

gulp.task('watch-less', function () {
    gulp.watch('less/**/*.less', ['compile-less']);
});

gulp.task('default', ['compile-less', 'watch-less']);