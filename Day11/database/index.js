const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    "postgres",//dbname
    "postgres",//username
    "Sugam",//password
    {
        host:"localhost",
        dialect:"postgres"
    }
)

sequelize.sync();
(async ()=>{
    try{
        await sequelize.authenticate();
        console.log("DB connected successfully");
    }
    catch(err){
        console.error("Unable to connect to DB"+err);
    }
})()

module.exports=sequelize;