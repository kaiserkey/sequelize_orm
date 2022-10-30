const Sequelize = require('sequelize')

class Connection{
    database = require('../config/config')
    
    async con(){
        const sequelize = new Sequelize(
            this.database.database,
            this.database.username,
            this.database.password,
            {
                host: this.database.host,
                port: this.database.dbport,
                dialect: this.database.dialect
            }
        )

        try{
            await sequelize.sync({force: true})
            console.log('Conectado a la base de datos...')
        }catch(e){
            console.log('Error al conectar a la base de datos: ', e)
        }
    } 
}

module.exports = new Connection()