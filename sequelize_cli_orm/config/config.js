require('dotenv').config()

module.exports = {
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'sequelize',
      host: process.env.DB_HOST || 'localhost',
      dbport: process.env.DB_PORT || 3000,
      dialect: process.env.DB_DIALECT || 'mariadb',
      define: {
        timestamps: false
      }
  }