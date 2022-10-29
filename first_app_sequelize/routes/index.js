'use strict'

const express = require('express'),
        router = express.Router(),
        //models
        User = require('../models/User')

async function mostrarUser(req, res, next){
    try {
        res.json(await User.findAll())
    } 
    catch (error) {
        console.log('Error al crear User: ', error)
    }
}

function index(req, res, next){
    let locals = {
        firstName: 'daniel',
        lastName: 'gonzalez'
    }
    res.render('index', locals)
}

function err404(req, res, next){
    let err = new Error(),
            locals = {
                title: 'Error 404',
                description: 'Recurso no encontrado',
                error: err
            }
    err.status = (err.status || 404);
    res.render('error', locals)
    next()
}

router
    .get('/', mostrarUser)
    .use(err404)

module.exports = router