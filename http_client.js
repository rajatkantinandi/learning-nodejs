/*Http Client GET request*/
var http=require('http');
var args=process.argv;
http.get(args[2],function(response){
  response.setEncoding('utf8');
  response.on("data",function(data){
    console.log(data);
  });
  response.on("error",console.error);
});