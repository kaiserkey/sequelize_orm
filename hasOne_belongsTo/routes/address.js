'use strict'

const express = require('express'),
        router = express.Router(),
        User = require('../models/User'),
        Address = require('../models/Address')


router.get('/viewAll', async (req,res)=>{
    res.json(await Address.findAll({
        include: {
            model: User,
            attributes: ['name', 'age']
        },
        attributes: ['street']
    }))
})

// CREATE
router.post('/create', async (req, res)=>{
    res.json( await Address.create(
        {
            street: req.body.street,
            userId: 4
        }
    ))
})

module.exports = router