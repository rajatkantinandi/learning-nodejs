/*Make it modular */
var mymodule=require('./filter_ls_module');
var args=process.argv;
mymodule(args[2],args[3],printResult);
function printResult(err,list){
  if(err){
    console.log("Error occured!!\n"+err);
  }
  else{
    for(item of list){
      console.log(item);
    }
  }
}