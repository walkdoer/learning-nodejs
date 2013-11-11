'use strict';
var fs = require('fs'),
    http = require('http'),
    mime = {
        'js': 'text/javascript',
        'unknow': 'text/plain',
        'txt': 'text/plain',
        'ico': 'image/x-icon',
        'jpeg': 'image/jpeg',
        'jpg': 'image/jpeg',
        'html': 'text/html',
        'gif': 'image/gif',
        'css': 'text/css'
    },
    staticPath = 'resources',
    realPath = './res',
    getExt = function (path) {
        var pathArray = path.split('.');
        return pathArray[pathArray.length - 1];
    },
    isStaticPath = function (path) {
        //如果path是public，且所请求的文件是合法的
        var ext = getExt(path);
        if (path.indexOf(staticPath) === 1 && mime[ext]) {
            return true;
        }
        return false;
    };
var server = http.createServer(function (request, response) {
    var reqUrl = request.url,
        filePath = reqUrl.slice('1'),
        contentType;
    if (isStaticPath(reqUrl)) {
        contentType = mime[getExt(reqUrl)];
        filePath = filePath.replace(staticPath, realPath);
        fs.readFile(filePath, function (err, data) {
            if (!data) {
                response.writeHead(404);
                response.write('文件:' + reqUrl + '不存在');
                response.end();
                return;
            }
            response.writeHead(200, {"Content-Type": contentType});
            response.write(data.toString());
            response.end();
        });
    } else {
        response.writeHead(200);
        response.write('文件格式不支持:' + reqUrl);
        response.end();
    }
});
server.listen(8000);