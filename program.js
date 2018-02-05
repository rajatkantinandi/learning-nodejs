/*Http Collect collection of responses*/
var http=require('http');
var bl = require('bl');
var args=process.argv;
http.get(args[2],function(response){
  response.pipe(bl(function(err,data){
    if(err){
      console.log("Error occured!!\n"+err);
    }
    else{
      console.log(data.toString().length);
      console.log(data.toString());
    }
  }));
});