const { dbConfig } = require('../database/db_con'),
        bcrypt = require('bcrypt'),
        jwt = require('jsonwebtoken'),
        authConf = require('../config/auth'),
        { body, validationResult } = require('express-validator')

module.exports = {
    async index(req,res){
        const posts = await dbConfig.Post.findAll()

        res.json({ posts: posts })
    }
}