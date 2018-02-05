var http=require('http');
var url=require('url');
var args=process.argv;
var server=http.createServer(function callback(request,response){
  var urlObj=url.parse(request.url,true);
  var d=urlObj.query.iso;
  var date=new Date(d);
  if(urlObj.pathname=="/api/parsetime"){
    var out={
      "hour":Math.round(date.getHours()),
      "minute":Math.round(date.getMinutes()),
      "second":Math.round(date.getSeconds())
    };
    response.write(JSON.stringify(out));
    response.end();
  }
  else if(urlObj.pathname=="/api/unixtime"){
    var t={"unixtime":Math.round(date.getTime())};
    response.write(JSON.stringify(t));
    response.end();
  }
});
server.listen(args[2]);