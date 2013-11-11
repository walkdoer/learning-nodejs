/**
 * 入门的一些东西
 */


/*运行js文件

Run it with `node myprogram.js` and some numbers as arguments. e.g:

   $ node myprogram.js 1 2 3

In which case the output would be an array looking something like:

  [ 'node', '/path/to/your/program.js', '1', '2', '3' ]
*/

console.log(process.argv);
//输出： [ 'node', '/Users/andrew/workspace/github/learning nodejs/2013-11-11-beginer.js' ]
var args = process.argv,
    sum = 0;
for (var i = 2; i < args.length; i++) {
    sum += parseInt(args[i], 10);
}
console.log('sum:' + sum);