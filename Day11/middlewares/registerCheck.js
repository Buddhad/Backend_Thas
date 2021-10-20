const { emailValidate,passwordValidate } = require("../utils/Validate")


const registerCheck=(req,res,next)=>{
    const {email,password,confirmPassword}=req.body;
    if(
        confirmPassword==password &&
        emailValidate(email) &&
        passwordValidate(password)
    ){
        next();
    }
    else{
        res.status(401).send("Initial Checks Fail");
    }
    
}

module.exports=registerCheck;