'use strict'

const express = require('express'),
        router = express.Router(),
        Post = require('../models/Post')

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
            body: req.body.body
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

router.get('/allPost', pug)

module.exports = router