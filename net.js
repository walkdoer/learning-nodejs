/**
 * 创建一个TCP Server，返回服务器时间
 * @type {[type]}
 */
var net = require('net');

var server = net.createServer(function(c) {
    console.log('server connected');
    var date = new Date();
    var year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes();
    c.on('end', function () {
        console.log('server disconnect');
    });
    c.write([year, month, day].join('-'));
    c.pipe(c);
});
server.listen(8080, function () {
    var address = server.address();
    console.log('server bound');
    console.log("opened server on %j", address);
});

//测试 telnet localhost 8080