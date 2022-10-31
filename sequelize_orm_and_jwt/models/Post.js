'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
class Post extends Model {
  
  static associate(models) {
    Post.belongsTo(models.User, { as: 'autor', foreignKey: 'user_id' })
  }

}
Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, 
  {
      sequelize,
      modelName: 'post',
  }
)

return Post

}