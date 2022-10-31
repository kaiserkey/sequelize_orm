'use strict';

const casual = require('casual')

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('role', [
      { role: 'admin' },
      { role: 'user' },
    ],
    {

    }); 

    await queryInterface.bulkInsert('user_role', [
      { role_id: 1, user_id: 1 },
      { role_id: 2, user_id: 2 },
    ],
    {

    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('role', null, {});
    await queryInterface.bulkDelete('user_role', null, {});
    
  }
};
