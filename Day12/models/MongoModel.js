const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    fullname:{type:String,default:""},
    email:{type:String,default:""},
    password:{type:String,default:""}
});

module.exports=User=mongoose.model("User",userSchema);

