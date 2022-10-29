const { Sequelize } = require('sequelize'),
        { database } = require('../config'),
        sequelize = new Sequelize(
            database.database,
            database.username,
            database.password,
            {
                host: database.host,
                port: 3000,
                dialect: 'mariadb'
            }
        )

module.exports = sequelize