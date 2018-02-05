/*JUGGLING ASYNC by forcing it to perform operation synchronously*/
var http=require('http');
var bl = require('bl');
var args=process.argv;
(function doTask(i){
http.get(args[i],function(response){
  response.pipe(bl(function(err,data){
    if(err){
      console.log("Error occured!!\n"+err);
    }
    else{
      console.log(data.toString());
      if(i<4){
        doTask(i+1);
      }
    }
  }));
});
})(2);