'use strict';
/** @type {import('sequelize-cli').Migration} */

//npx sequelize-cli migration:generate --name create-table-address


module.exports = {
async up (queryInterface, Sequelize) {
  
  await queryInterface.createTable('address', 
  { 
    
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    street: {
      type: Sequelize.STRING
    },

    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model: 'users',
        key: 'id'
      } ,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }
  
  );
  
},

async down (queryInterface, Sequelize) {
  
  await queryInterface.dropTable('address');
  
}

};
