# 借助Gulp 配置的自动图片压缩小工具

用于个人写博客的文章配图的图片无损压缩

## 其他说明

git clone 后需要配置Tinypng 信息，前往官网获取到API KEY 填入如下位置：

	//默认任务
	var gulp = require('gulp');
	var tinypng = require('gulp-tinypng');

	gulp.task('default', function () {
   		 gulp.src('img/*.{png,jpg,jpeg}')
        	.pipe(tinypng('API-KEY'))
        	.pipe(gulp.dest('./'));
	});

	
一个邮箱可以免费申请每个月500 次API 调用，建议用自己的。