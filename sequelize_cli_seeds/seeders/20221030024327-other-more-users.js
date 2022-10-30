'use strict';
//crear migraciones
//npx sequelize-cli seed:generate --name create-users
//npx sequelize-cli db:seed:all
//borrar migraciones
//npx sequelize-cli db:seed:undo --seed 0221030012341-more-users
//npx sequelize-cli db:seed:undo:all

const { dbConfig } = require('../database/db'),
      casual = require('casual')

module.exports = {
  async up (queryInterface, Sequelize) {
      
      await dbConfig.User.create(
        {
          name: casual._first_name(),
          age: Math.floor(Math.random() * (80 - 18) + 18),
          domicilio: {
            street: casual._address()
          }
        },
        {
          include: 'domicilio'
        }
      ); 
  },

  async down (queryInterface, Sequelize) {
    
      /* Add commands to revert seed here.
      Example: */
      //await queryInterface.bulkDelete('user', null, {});
      await queryInterface.bulkDelete('user', null, {});
  }
};