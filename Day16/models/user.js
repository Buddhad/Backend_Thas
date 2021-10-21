const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', 
{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM,
        values: ["user", "admin", "superadmin"],
        defaultValue: "user",
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
});

module.exports = User;