
var fs=require('fs');
module.exports = function (dir,extension,doStuff) { 
  /* List of files in a directory 
    Arguments: directory, extension & callback function
  */ 
extension="."+extension;
fs.readdir(dir,function(err,list){
  if(err){
    doStuff(err);
  }
  else{
  var filteredList=list.filter(function(val){
    return val.substr(-1*extension.length)==extension;
    });
    doStuff(null,filteredList);
  }
});
}