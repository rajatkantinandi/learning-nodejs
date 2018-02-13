var mongo=require('mongodb').MongoClient;
mongo.connect("mongodb://localhost:27017",conn);
function conn(err,client){
    if(err){
        throw err;
    }
    else{
    var db = client.db("learnyoumongo");
    var collectn=db.collection("prices");
    collectn.aggregate([
        { $match: {size:process.argv[2]}}
      , { $group: {
          _id: 'average' 
        , average: {
            $avg: '$price'
          }
        }}
      ]).toArray(function(err, results) {
        if(err) throw err;// handle error
        console.log(parseFloat(results[0].average).toFixed(2));
        // => [
        // =>   { _id: 'average', average: 11 }
        // => ]
        client.close();
      });
}
}