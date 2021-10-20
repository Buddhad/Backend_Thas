var express = require('express');
var router = express.Router();
var Pool = require('pg').Pool;

const pool = new Pool({
  user:'postgres',
  host:'postgres',
  database:'postgres',
  password:"Sugam",
  port:5432
})
/* GET users listing. */
router.get('/', function(req, res, next) {

  pool.query("Select * from Users",(err,result)=>{
    if(err){
      console.error(err);
    }
    else{
      res.status(200).json(result)
    }
  })
});

module.exports = router;
