var mongo=require('mongodb').MongoClient;
mongo.connect("mongodb://localhost:27017",conn);
var doc={
    firstName:process.argv[2],
    lastName:process.argv[3]
}
function conn(err,client){
    if(err){
        throw err;
    }
    else{
    var db = client.db('learnyoumongo');
    var collectn=db.collection('docs');
    collectn.insert(doc,function(err,data){
        if(err) throw err;
        else console.log(JSON.stringify(doc));
        client.close();
    });
}
}