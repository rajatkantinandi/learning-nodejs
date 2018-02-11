var express = require('express');
var fs=require('fs');
var app = express();
var file=process.argv[3];
app.get('/books',function(req,res){
    fs.readFile(file,read);
    function read(err,data){
        if(err){
            res.send("Error reading file!!");
        }
        else{
        object=JSON.parse(data);
        res.json(object);
        }
    }
});

app.listen(process.argv[2]);