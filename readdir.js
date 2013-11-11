var fs = require('fs');

//异步
fs.readdir('./res/', function (err, files) {
    if (err) throw err;
    console.log('Async');
    console.log(files);
});

//同步
var files = fs.readdirSync('./res/');
console.log('Sync');
console.log(files);

/*

输出：

    Sync
    [ 'folder_a', 'folder_b', 'test.txt', 'this_is_a.js' ]
    Async
    [ 'folder_a', 'folder_b', 'test.txt', 'this_is_a.js' ]


 */


function ls(path, fileType) {
    var files = fs.readdirSync('./res/'),
        tmpArray,
        type,
        result = [];
    for (var i = 0; i < files.length; i++) {
        tmpArray = files[i].split('.');
        type = tmpArray[tmpArray.length - 1];
        if (type.toLowerCase() === fileType.toLowerCase()) {
            result.push(files[i]);
        }
    }
    return result;
}

console.log(ls('./res/', 'js'));