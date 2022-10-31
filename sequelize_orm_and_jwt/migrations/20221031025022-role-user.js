'use strict';

/** @type {import('sequelize-cli').Migration} */
//relacion de muschos a muchos role y user
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('user_role', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, 
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'role',
          key: 'id'
        }
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
    }
    );

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('user_role');
    
  }
};
