/**
 * [postpacker static resources upload CDN]
 * @param  {[object]} conf [CDN信息、本地目录与远程目录配置]
 * @author [maqing01]
 */
module.exports = function(content, file, conf) {
    'use strict';
    console.log(process.cwd());
    var vfs = require('vinyl-fs');
    var ftp = require('vinyl-ftp');  

    console.log(conf);

    if(typeof conf === 'object' && 
        conf.startPath !== undefined &&
        conf.startPath !== '' && 
        conf.endPath !== undefined &&
        conf.endPath !== '' &&
        conf.cdnHost !== undefined &&
        conf.cdnHost !== '') {

        var startPath = conf.startPath;
        var endPath = conf.endPath;
        var cdnHost = conf.cdnHost;
        var username = conf.username || '';
        var userpwd = conf.userpwd || '';

        var conn = new ftp({
            host: cdnHost,
            user: username,
            pass: userpwd,
            parallel: 3,
            maxConnections: 1000,
            debug: function(msg) {console.log(msg)},
        });
        vfs.src(startPath, {buffer: false})
           .pipe(conn.dest(endPath))
           .on("end", function() {console.log("Upload successfully!")});
    } else {
        throw new Error("Configuration error!")
    }
}