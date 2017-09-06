# jello-postpackager-upload-cdn
***
* 58金融事业部基于fis所编写的插件
* 源码编译打包后将指定目录静态资源上传cdn


# fis-config.js 配置
***
* fis.config.set('modules.postpackager', 'upload-cdn');
* fis.config.set('settings.postpackager.upload-cdn', {
* 　　cdnHost: 'your CDN Host',
* 　　username: 'your CDN username',
* 　　userpwd: 'your CDN password',
* 　　startPath: 'LocalAddress/**',
* 　　endPath: 'RemoteAddress'
* });
* [具体使用参考](http://fex-team.github.io/fis-site/docs/dev/plugin.html)