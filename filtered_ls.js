/*List of files in a directory */
var fs=require('fs');
var args=process.argv;
var extension="."+args[3];
fs.readdir(args[2],doStuff);
function doStuff(err,list){
  var filteredList=list.filter(function(val){
    return val.substr(-1*extension.length)==extension;
  });
  for(item of filteredList){
    console.log(item);
  }
}