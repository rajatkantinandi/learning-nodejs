var mongo=require('mongodb').MongoClient;
mongo.connect("mongodb://localhost:27017",conn);
function conn(err,client){
    if(err){
        throw err;
    }
    else{
    var db = client.db("learnyoumongo");
    var collectn=db.collection("parrots");
    collectn.count({
        age:{$gt:+process.argv[2]}
    },function(err,count){
        if(err) throw err;
        console.log(count);
        client.close();
    });
}
}