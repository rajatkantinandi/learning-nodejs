var fs=require('fs');
var http=require('http');
var args=process.argv;
var server=http.createServer(function callback(request,response){
  var rstream = fs.createReadStream(args[3]);
  rstream.pipe(response);
});
server.listen(args[2]);