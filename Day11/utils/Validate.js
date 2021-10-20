const emailValidate=(email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
    //return re.test(email);
}

const passwordValidate=(password)=>{
    const regPass = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-_]).{8,}$/;
     return regPass.test(String(password))
    //return regPass.test(password);
}

module.exports={
    emailValidate,
    passwordValidate
}