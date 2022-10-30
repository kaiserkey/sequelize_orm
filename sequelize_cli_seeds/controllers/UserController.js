const { dbConfig } = require('../database/db')

module.exports = {
    async all(req, res){
        const users = await dbConfig.User.findAll(
            {
                include: {
                    association: 'domicilio',
                    attributes: ['street']
                }
            }
        )
        res.json(users)
    }
}