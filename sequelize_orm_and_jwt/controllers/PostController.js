const { dbConfig } = require('../database/db_con'),
        bcrypt = require('bcrypt'),
        jwt = require('jsonwebtoken'),
        authConf = require('../config/auth'),
        { body, validationResult } = require('express-validator')

module.exports = {

    async find(req, res, next){
        const post = await dbConfig.Post.findByPk(req.body.id)
        if(!post){
            res.status(404).json({ msg: 'El post no ha sido encontrado' })
        }else{
            req.post = post
            next()
        }
    },

    async index(req,res){
        const posts = await dbConfig.Post.findAll()

        res.json({ posts: posts })
    },

    async show(req, res){
            res.json(req.post)
    },

    async delete(req, res){
        await req.post.destroy()
        res.json({ msg: 'El post fue eliminado'})
    },

    async update(req, res){
        req.post.title = req.body.title
        req.post.body = req.body.body

        await req.post.save()

        res.json(req.post)
    },
}