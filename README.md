# 借助Gulp 配置的自动图片压缩小工具+自动FTP上传

用于个人写博客的文章配图的图片无损压缩+自动上传到FTP

## 配置说明

为了安全，将重要的配置信息放入到一个json 文件中，名为 `config.json`，该文件示例代码如下：

	{ 
 	 "tinypngapi": "xxxxx",
 	 "sftp" : {
    	"host" : "8.8.8.8",
    	"user" : "username",
    	"port" : "22",
    	"key" : "~/.ssh/sdfsfdsf",
    	"remotePath" :"/"
 	 }
	}	

相关内容请自行配置，`config.json`文件已经添加到`.gitignore` 文件中。

## 使用说明

原始图片（未压缩图片）放入到 `img` 文件夹，压缩操作后自动到项目文件目录下。

	gulp clean
	
在进行压缩图片操作前存档+删除之前的旧文件内容

	gulp

默认任务，图片压缩。因为外国服务器原因，压缩有时候非常慢，考虑挂代理

	gulp upload
	
上传压缩后的文件到远程FTP 服务器上

