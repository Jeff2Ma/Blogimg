//默认任务
var gulp = require('gulp');
var tinypng = require('gulp-tinypng');

gulp.task('default', function () {
    gulp.src('img/*.{png,jpg,jpeg}')
        .pipe(tinypng('TXLweO1Lvlxnq9-Yg4sDg0WKnPlHls3d'))
        .pipe(gulp.dest('./'));
});
