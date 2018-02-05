/*count number of lines in a file*/
var fs=require('fs');
var args=process.argv;
var bfr=fs.readFileSync(args[2]);
var bfrString=bfr.toString('ascii');
var lines=bfrString.split('\n');
console.log(lines.length);