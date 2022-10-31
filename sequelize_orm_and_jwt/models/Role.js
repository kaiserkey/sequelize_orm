'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.Role, { as: 'roles', through: 'user_role', foreignKey: 'user_id' })
    }
  }

  Role.init(
    {
      role: DataTypes.STRING
    }, 
    {
      sequelize,
      modelName: 'role',
    }
  )

  return Role
}