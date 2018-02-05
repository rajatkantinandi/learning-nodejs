var http=require('http');
var t2map=require('through2-map');
var args=process.argv;
var server=http.createServer(function callback(request,response){
  request.pipe(t2map(function(input){
    return input.toString().toUpperCase();
  })).pipe(response);
});
server.listen(args[2]);