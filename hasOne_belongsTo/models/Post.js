'use strict'

const {Model, DataTypes} = require('sequelize'),
        sequelize = require('../database/db')

class Post extends Model{}
Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.TEXT
    },
    {
        sequelize,
        modelName: 'post',
        timestamps: false
    }
)

module.exports = Post