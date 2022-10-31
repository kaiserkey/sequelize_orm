'use strict';
//npx sequelize-cli migration:generate --name create-users-table
//npx sequelize-cli db:migrate:undo
//npx sequelize-cli db:migrate:undo:all
/** @type {import('sequelize-cli').Migration} */
module.exports = {

async up (queryInterface, Sequelize) {

  await queryInterface.createTable('users', { 

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    name: {
      type: Sequelize.STRING,
      allowNUll: false,
      defaultValue: 'Name'
    },

    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  
  });

},

async down (queryInterface, Sequelize) {
  
  await queryInterface.dropTable('users');
  
}

};
