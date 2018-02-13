var mongo=require('mongodb').MongoClient;
mongo.connect("mongodb://localhost:27017",conn);
function conn(err,client){
    if(err){
        throw err;
    }
    else{
    var db = client.db(process.argv[2]);
    var collectn=db.collection('users');
    collectn.update({
        "username":"tinatime"
    },{
        $set:{
            "age":40
        }
    },function(err,data){
        if(err) throw err;
        client.close();
    });
}
}