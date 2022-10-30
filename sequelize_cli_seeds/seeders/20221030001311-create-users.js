'use strict';
//npx sequelize-cli seed:generate --name create-users
//npx sequelize-cli db:seed:all
/ @type {import('sequelize-cli').Migration} /
module.exports = {
  async up (queryInterface, Sequelize) {
    
      //Add seed commands here.
      //Example:
      const users = 
      [
        /* { name: 'John',age: 33 },
        { name: 'Conor',age: 22 },
        { name: 'Jorge',age: 34 },
        { name: 'Kim',age: 54 } */
      ]
      await queryInterface.bulkInsert('user', users,
      {

      }); 
  },

  async down (queryInterface, Sequelize) {
    
      /* Add commands to revert seed here.
      Example: */
      await queryInterface.bulkDelete('user', null, {});
  }
};
