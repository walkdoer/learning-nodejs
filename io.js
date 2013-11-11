var fs = require('fs');
/*
ure JavaScript is Unicode friendly but not nice to binary data. 
When dealing with TCP streams or the file system, it's necessary to handle octet streams. 
Node has several strategies for manipulating, creating, and consuming octet streams.

Raw data is stored in instances of the Buffer class.
 A Buffer is similar to an array of integers but corresponds to 
 a raw memory allocation outside the V8 heap. A Buffer cannot be resized.
 */

//异步
fs.readFile('./res/test.txt', function (err, data) {
    if (err) throw err;
    var str = data.toString();
    var lineNumber = str.split('\n').length;
    console.log('Async line number: ' + lineNumber);
});
//同步
var data = fs.readFileSync('./res/test.txt'),
    str = data.toString();
var lineNumber = str.split('\n').length;
console.log('Sync line number: ' + lineNumber);



//输出：
// Sync line number: 45
// Async line number: 45