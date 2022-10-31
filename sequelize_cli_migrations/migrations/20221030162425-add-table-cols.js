'use strict';

/** @type {import('sequelize-cli').Migration} */

//npx sequelize-cli migration:generate --name add-table-cols
//npx sequelize-cli db:migrate

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('address', 'city', {

          type: Sequelize.DataTypes.STRING

        },
        { transaction: t }),

        queryInterface.addColumn('address', 'country', {

          type: Sequelize.DataTypes.STRING,

        },
        { transaction: t })

      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.removeColumn('address', 'city', { transaction: t }),
        queryInterface.removeColumn('address', 'country', { transaction: t })

      ]);
    });
  }
};