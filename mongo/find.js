var mongo=require('mongodb').MongoClient;
mongo.connect("mongodb://localhost:27017",conn);
function conn(err,client){
    if(err){
        throw err;
    }
    else{
    var db = client.db('learnyoumongo');
    var collectn=db.collection('parrots');
    collectn.find({
        age:{
            $gt:+parseInt(process.argv[2])
        }
    }).toArray(function(err,docs){
        console.log(docs);
        client.close();
    });
    }
}