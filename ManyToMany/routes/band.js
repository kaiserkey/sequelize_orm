'use strict'

const express = require('express'),
        router = express.Router(),
        User = require('../models/User'),
        Band = require('../models/Band')


router.get('/viewAll', async (req,res)=>{
    res.json(await Band.findAll({
        include: {
            model: User,
            attributes: ['name', 'role']
        },
        attributes: ['name', 'type']
    }))
})

// CREATE
router.post('/create', async (req, res)=>{
    res.json( await Band.create(
        {
            name: req.body.nameBand,
            type: req.body.type,
            users: 
            [
                {
                    name: req.body.name,
                    email: req.body.email,
                    age: req.body.age,
                    role: req.body.role
                }
            ]
        },
        {
            include: 'users'
        }
    ))
})

//another form
/*router.post('/create/anotherForm', async (req, res)=>{
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        role: req.body.role
    })
    const band = Band.create({
        name: req.body.nameBand,
        type: req.body.type,
    })

    band.addUser(user)
}) */

module.exports = router