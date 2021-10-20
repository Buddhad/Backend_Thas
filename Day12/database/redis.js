const redis = require('redis');
const redisConnect= require('connect-redis');
const session = require('express-session');

const RedisStore = redisConnect(session);

const RedisClient = redis.createClient({
    host:"localhost",
    port:637
})

RedisClient.on('error',function(err){
    console.error(err);
})

RedisClient.on('connect',function(){
    console.log("Redis Connected Succesfully");
})

module.exports={
    RedisClient,
    RedisStore,
    session
}