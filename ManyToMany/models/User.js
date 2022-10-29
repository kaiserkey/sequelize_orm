'use strict'

const {Model, DataTypes} = require('sequelize'),
        sequelize = require('../database/db')

class User extends Model{}
User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'El campo no puede ser null'
                },
                isAlpha: {
                    args: true,
                    msg: 'El nombre solo puede contener letras'
                },
                len: {
                    args: [2,80],
                    msg: 'El nombre no puede contener menos de 2 caracteres'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'El email no es un correo valida'
                }
            }
        },
        age: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: {
                    args: true,
                    msg: 'La edad tiene que ser un numero'
                },
                min: {
                    args: 18,
                    msg: 'La edad no puede ser menor a 18 años'
                },
                max: {
                    args: 100,
                    msg: 'La edad no puede ser mayor a 100 años'
                },
                esPar(value){
                    if(value % 2){
                        throw new Error('La edad tiene que ser un numero par')
                    }
                }
            }
        },
        role: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    {
        sequelize,
        modelName: 'user',
        timestamps: false
    }

)

module.exports = User