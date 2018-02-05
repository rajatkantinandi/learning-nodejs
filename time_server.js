var net=require('net');
var server=net.createServer(function listener(socket){
  var date=new Date();
  var d={
    "yyyy":date.getFullYear(),
    "mm":zeroAppender(date.getMonth()+1),
    "dd":zeroAppender(date.getDate()),
    "HH":zeroAppender(date.getHours()),
    "MM":zeroAppender(date.getMinutes())
  }
  var data=d.yyyy+"-"+d.mm+"-"+d.dd+" "+d.HH+":"+d.MM+"\n";
  socket.write(data);
  socket.end();
});
server.listen(process.argv[2]);
function zeroAppender(val){
  return (val<10)?("0"+val):val;
}