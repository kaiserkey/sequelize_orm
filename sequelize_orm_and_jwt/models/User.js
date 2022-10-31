'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

class User extends Model {

  static associate(models) {
    User.hasMany(models.Post, {as: 'posts', foreignKey: 'user_id'})
    User.belongsToMany(models.Role, { as: 'users', through: 'user_role', foreignKey: 'role_id' })
  }

}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlpha: {
          msg: 'El nombre no puede tener numeros.'
        },
        len:{
          args:[2, 80],
          msg: 'El nombre debe tener entre 2 y 80 caracteres.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6,255],
          msg: 'La contraseña debe estar entre 6 y 255 caracteres'
        }
      }

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'El email no es valido.'
        }
      }
    }

  }, 
  {
    sequelize,
    modelName: 'user',
  }
  )

  return User

}