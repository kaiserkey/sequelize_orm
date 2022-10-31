const { dbConfig } = require('../database/db_con'),
        bcrypt = require('bcrypt'),
        jwt = require('jsonwebtoken'),
        authConf = require('../config/auth'),
        { body, validationResult } = require('express-validator')

module.exports = {
    async index(req,res){
        const posts = await dbConfig.Post.findAll()

        res.json({ posts: posts })
    },

    async show(req, res){
        const post = await dbConfig.Post.findByPk(req.body.id)
        if(!post){
            res.status(404).json({ msg: 'El post no ha sido encontrado' })
        }else{
            res.json(post)
        }
    },

    async delete(req, res){
        const post = await dbConfig.Post.findByPk(req.body.id)
        if(!post){
            res.status(404).json({ msg: 'El post no ha sido encontrado' })
        }else{
            await post.destroy()
            res.json({ msg: 'El post fue eliminado'})
        }
    },

    async update(req, res){
        const post = await dbConfig.Post.findByPk(req.body.id)
        if(!post){
            res.status(404).json({ msg: 'El post no ha sido encontrado' })
        }else{
            post.title = req.body.title
            post.body = req.body.body

            await post.save()

            res.json(post)
        }
    },
}