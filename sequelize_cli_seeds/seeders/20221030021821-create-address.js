'use strict';

const { dbConfig } = require('../database/db'),
      casual = require('casual')

module.exports = {
async up (queryInterface, Sequelize) {
    const address = [],
    users = await dbConfig.User.findAll()

    users.forEach(user => {
      address.push(
        { street: casual._address(), user_id: user.id }
      )
    });

    await queryInterface.bulkInsert('address', address, 
      {

      }
    );

},

async down (queryInterface, Sequelize) {

  await queryInterface.bulkDelete('People', null, {});
    
  }
};
