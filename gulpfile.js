//默认任务
var gulp = require('gulp'),
tinypng = require('gulp-tinypng'),
sftp = require('gulp-sftp'),
copy = require('gulp-copy'),
clean = require('gulp-clean'),
config = require('./config.json'),
imagemin   = require('gulp-imagemin'),
    pngquant   = require('imagemin-pngquant');

//默认任务
gulp.task('tiny', function () {
    gulp.src('img/*.{png,jpg,jpeg}')
        .pipe(tinypng(config.tinypngapi))
        .pipe(gulp.dest('./'));
});

//copy
gulp.task('copy', function() {
   gulp.src('img/*.{png,jpg,jpeg}')
   .pipe(gulp.dest('./old'));
});

//删除
gulp.task('delete', function () {
    return gulp.src(['img/*.{png,jpg,jpeg}','./*.{png,jpg,jpeg}'], {read: false})
        .pipe(clean());
});

//清理任务
gulp.task('clean', function(){
  gulp.run('copy');
  gulp.run('delete');
});

//压缩图片
gulp.task('default', function () {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./'));
});

//上传任务
gulp.task('upload', function () {
	function checkTime(i) {
          if (i < 10) {
              i = "0" + i
          }
          return i
      }

	var d = new Date();
	var year = d.getFullYear();
	var month = checkTime(d.getMonth() + 1);

    return gulp.src('./*.{png,jpg,jpeg}')
        .pipe(sftp({
            host: config.sftp.host,
            user: config.sftp.user,
            port: config.sftp.port,
            key: config.sftp.key,
            remotePath: config.sftp.remotePath+year+'/'+month
        }));
});