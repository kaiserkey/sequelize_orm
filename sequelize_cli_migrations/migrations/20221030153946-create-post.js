'use strict';
/** @type {import('sequelize-cli').Migration} */

//npx sequelize-cli db:migrate
//npx sequelize-cli model:generate --name Post --attributes title:string,body:string

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('post', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('post');
  }
};