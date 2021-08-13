const { DataTypes } = require('sequelize');
const { db } = require('../db/connection');
const User = db.define('Users',{
    id_user:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull : false
    },
    user_name:{
        type: DataTypes.STRING(15),
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    user_las:{
        type: DataTypes.STRING(30),
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    avatar:{
        type: DataTypes.STRING(50),
        defaultValue : ""
        
    }
},{
    timestamps : false,
})

module.exports= User;