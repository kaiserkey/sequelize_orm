const { dbConfig } = require('../database/db')

module.exports = {
    async all(req, res){
        const address = await dbConfig.Address.findAll(
            {
                attributes: ['street'],
                include: {
                    association: 'residente',
                    attributes: ['name']
                }
            }
        )
        res.json(address)
    }
}