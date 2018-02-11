/*count number of lines in a file async*/
var fs=require('fs');
var args=process.argv;
var bfr=fs.readFile(args[2],read);
function read(err,data){
var bfrString=data.toString('ascii');
var lines=bfrString.split('\n');
console.log(lines.length-1);
}