/*count number of lines in a file asynchronously*/
var fs=require('fs');
var args=process.argv;
var bfr=fs.readFile(args[2],'utf-8',doStuff);
function doStuff(err,data){
  console.log(data.split("\n").length-1);
}