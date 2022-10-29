const { Sequelize } = require('sequelize'),
        { database } = require('../config'),
        sequelize = new Sequelize(
            database.database,
            database.username,
            database.password,
            {
                host: database.host,
                port: database.dbport,
                dialect: database.dialect
            }
        )

module.exports = sequelize