'use strict'

//npx sequelize-cli model:generate --name Address --attributes street:string

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
}

Address.init(
  {
    street: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'address',
  }
);

return Address;

};