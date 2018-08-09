
var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('views', function buildHTML() {
    return gulp.src('src/views/pages/*.pug')
        .pipe(pug({
            // Your options in here.
        }))
        .pipe(gulp.dest('dist'));
});
