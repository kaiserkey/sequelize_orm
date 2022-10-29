'use strict'

const express = require('express'),
        router = express.Router(),
        User = require('../models/User')




async function pug(req, res, next){
    res.render('index', {allUser: await User.findAll()})
}


// CREATE
router.post('/create', async (req, res)=>{
    try{
        res.json( 
            await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                role: req.body.role,
            }
        ))
    }catch(e){
        res.json(e)
    }
})

// READ
router.get('/read/:id', async (req, res)=>{
    res.json( await User.findByPk(req.params.id) )
})

// UPDATE
router.get('/update/:id', async (req, res)=>{
    await User.update({
        title: req.body.title,
        body: req.body.body
    },
    {
        where: {
            id: req.params.id
        }
    }
    )
    res.json( await User.findByPk(req.params.id) )
})

// DELETE
router.get('/delete/:id', async (req,res)=>{
    res.json(await User.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    ))
})

router.get('/allUser', pug)

module.exports = router