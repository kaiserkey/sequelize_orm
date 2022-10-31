'use strict';
//crear migraciones
//npx sequelize-cli seed:generate --name create-users
//npx sequelize-cli db:seed:all
//borrar migraciones
//npx sequelize-cli db:seed:undo --seed 0221030012341-more-users
//npx sequelize-cli db:seed:undo:all

const casual = require('casual')

module.exports = {
  async up (queryInterface, Sequelize) {
    
      //Add seed commands here.
      //Example:
      const users = 
      [
        { name: casual._first_name(),age: Math.floor(Math.random() * (60 - 18) + 18) },
        { name: casual._first_name(),age: Math.floor(Math.random() * (60 - 18) + 18) },
        { name: casual._first_name(),age: Math.floor(Math.random() * (60 - 18) + 18) },
        { name: casual._first_name(),age: Math.floor(Math.random() * (60 - 18) + 18) },
        { name: casual._first_name(),age: Math.floor(Math.random() * (60 - 18) + 18) },
        { name: casual._first_name(),age: Math.floor(Math.random() * (60 - 18) + 18) },
        { name: casual._first_name(),age: Math.floor(Math.random() * (60 - 18) + 18) },
        { name: casual._first_name(),age: Math.floor(Math.random() * (60 - 18) + 18) },
      ]
      await queryInterface.bulkInsert('users', users,
      {

      }); 
  },

  async down (queryInterface, Sequelize) {
    
      /* Add commands to revert seed here.
      Example: */
      //await queryInterface.bulkDelete('user', null, {});
      await queryInterface.bulkDelete('users', null, {});
  }
};
