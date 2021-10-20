var mangoose= require('mongoose');
var mongodb ="mongodb://127.0.0.1/my_database";
mangoose.connect(mongodb,{useNewUrlParser:true,useUnifiedTopology:true});

var db=mangoose.connection;

db.on("error",(err)=>{
    console.error(err);
})
db.on("connect",()=>{
    console.log("MongoDb connected");
})
