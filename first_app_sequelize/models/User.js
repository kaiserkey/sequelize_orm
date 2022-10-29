const { Model, DataTypes } = require('sequelize'),
        sequelize = require('../database/db')

class User extends Model{}
User.init(
    {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'User'
    }
)

module.exports = User