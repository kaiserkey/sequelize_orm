'use strict'

const {Model, DataType, DataTypes} = require('sequelize'),
        sequelize = require('../database/db')

class Band extends Model {}
Band.init(
    {
        name: DataTypes.STRING,
        type: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'band',
        timestamps: false
    }
)

module.exports = Band