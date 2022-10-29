'use strict'

const {Model, DataTypes} = require('sequelize'),
        sequelize = require('../database/db')

class Address extends Model{}
Address.init(
    {
        street: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'address',
        timestamps: false
    }
)

module.exports = Address