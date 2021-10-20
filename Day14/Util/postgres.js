const {Sequelize}=require('sequelize');
const sequelize=new Sequelize(
    "postgres",
    "postgres",
    "123456789",
    {
        host:"localhost",   
        dialect:"postgres"
    }
);
sequelize.sync();

(async()=>{

    try {
        await sequelize.authenticate();
        console.log("Connection Established With DB");
    } catch (error) {
        console.error("Unable to connect to DB");
    }
})();
module.exports=sequelize;