const express = require('express');
const app = express();

const middleware=(req,res,next)=>{
    if(req.query.admin=="true"){            //url:- http://localhost:7000/?admin=true
        next();
    }
    else{
        res.status(404).send("should be admin")
    }
}
//app.use(middleware)  :- Used to insert middleware in every function
app.get('/',middleware,(req,res)=>{
    res.send("hiii this is admin")
})

app.listen(7000);
