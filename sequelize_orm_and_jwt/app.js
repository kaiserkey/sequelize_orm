'use strict'

require('dotenv').config()
const express = require( 'express' ),
        pug = require( 'pug' ),
        morgan = require( 'morgan' ),
        publicDir = express.static( `${ __dirname }/publics` ),
        viewsDir = `${ __dirname }/views`,
        port = ( process.env.HTTP_PORT  || 4000),
        app = express(),
        { connection } = require( './database/db_con' ),
        router = require( './routes/router' ),
        cookieParser = require('cookie-parser')


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
    .use(cookieParser())
    .use( express.json() )
    .use( express.urlencoded({extended: false}) )
    .use( publicDir )
    .use( morgan('dev') )
    //ejecutando el middleware enrutador
    .use( router )    
    //manejador de errores
    .use(err404)
    .listen( port, 
        ()=>{
            console.log(`Iniciando en el puerto http://localhost:${port}`)
            connection.con()
        }
    )