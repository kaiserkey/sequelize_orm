'use strict';

//npx sequelize-cli model:generate --name User --attributes name:string,age:integer

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //un usuario tiene una direccion
      User.hasOne(models.Address, { as: 'domicilio', foreignKey: 'user_id' })
    }
}

User.init(
  {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'users',
  }
);

return User;

};