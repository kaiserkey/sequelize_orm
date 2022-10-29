'use strict'

const express = require('express'),
        router = express.Router(),
        User = require('../models/User'),
        Address = require('../models/Address'),
        Post = require('../models/Post')


router.get('/viewAll', async (req,res)=>{
    res.json(await User.findAll({
        // include: 'address',
        include: [
            {
                model: Address,
                attributes: ['street'],
                where: {
                    id: 2
                }
            },
            {
                model: Post,
                attributes: ['title', 'body'],
            }
        ],
        attributes: ['name', 'age']
    }))
})

//ver la direccion de usuario /api/users/:id/street
// router.get('/:id/street', async (req,res)=>{
//     res.json(
//         await User.findByPk(req.params.id).getStreet()
//     )
// })

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