const { dbConfig } = require('../database/db')

module.exports = {
    async all(req, res){
        const users = await dbConfig.User.findAll()
        res.json(users)
    }
}