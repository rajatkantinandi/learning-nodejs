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
    },{fields:{
        name:1,
        age:1,
        _id:0
        }
    }).toArray(function(err,docs){
        if(err) throw err;
        console.log(docs);
        client.close();
    });
    }
}