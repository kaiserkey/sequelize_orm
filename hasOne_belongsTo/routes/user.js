'use strict'

const express = require('express'),
        router = express.Router(),
        User = require('../models/User'),
        Address = require('../models/Address')


router.get('/viewAll', async (req,res)=>{
    res.json(await User.findAll({
        // include: 'address',
        include: {
            model: Address,
            attributes: ['street']
        },
        attributes: ['name', 'age']
    }))
})

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

module.exports = router