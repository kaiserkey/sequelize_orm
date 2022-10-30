'use strict'

const express = require( 'express' ),
        pug = require( 'pug' ),
        morgan = require( 'morgan' ),
        publicDir = express.static( `${__dirname}/publics` ),
        viewsDir = `${__dirname}/views`,
        port = ( process.env.PORT || 4000 ),
        app = express(),
        { connection } = require('./database/db'),
        router = require('./routes/router')


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

app// configurando app
    .set( 'view engine', 'pug' )
    .set( 'views', viewsDir )
    .set( 'port', port )
    //ejecutando middlewares
    .use(express.json())
    .use(express.urlencoded({extended: false}))
    .use( publicDir )
    .use( morgan('dev') )
    //ejecutando el middleware enrutador
    .use('/', router)    
    //manejador de errores
    .use(err404)
    .listen(port, ()=>{
        console.log(`Iniciando en el puerto ${port}`)
        connection.con()
    })

