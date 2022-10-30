const { dbConfig } = require('../database/db')

module.exports = {
    async all(req, res){
        const address = await dbConfig.Address.findAll()
        res.json(address)
    }
}