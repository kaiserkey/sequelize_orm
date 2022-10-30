'use strict'

const express = require('express'),
        router = express.Router(),
        User = require('../models/User'),
        Address = require('../models/Address'),
        Post = require('../models/Post')


router.get('/viewAll', async (req,res)=>{
    res.json(await Post.findAll(
        {
            include: {
                model: User,
                attributes: ['id', 'name']
            },
            attributes: ['title', 'body']
        }
    ))
})

async function pug(req, res, next){
    //const allPost = await Post.findAll()
    //res.json(allPost[0])
    res.render('index', {allPost: await Post.findAll()})
}


// CREATE
router.post('/create', async (req, res)=>{
    res.json( await Post.create(
        {
            title: req.body.title,
            body: req.body.body,
            userId: req.body.id
        }
    ))
})

// READ
router.get('/read/:id', async (req, res)=>{
    res.json( await Post.findByPk(req.params.id) )
})

// UPDATE
router.get('/update/:id', async (req, res)=>{
    await Post.update({
        title: req.body.title,
        body: req.body.body
    },
    {
        where: {
            id: req.params.id
        }
    }
    )
    res.json( await Post.findByPk(req.params.id) )
})

// DELETE
router.get('/delete/:id', async (req,res)=>{
    res.json(await Post.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    ))
})



module.exports = router