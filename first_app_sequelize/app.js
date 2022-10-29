'use strict'

const express = require( 'express' ),
        pug = require( 'pug' ),
        morgan = require( 'morgan' ),
        routes = require( './routes/index' ),
        publicDir = express.static( `${__dirname}/publics` ),
        viewsDir = `${__dirname}/views`,
        port = ( process.env.PORT || 4000 ),
        app = express(),
        sequelize = require('./database/db'),
        //models
        User = require('./models/User')

async function createUser(){
    try {
        await User.create({
            firstName: 'Daniel',
            lastName: 'Gonzalez'
        })
        
        } catch (error) {
            console.log('Error al crear User: ', error)
        }
}

app// configurando app
    .set( 'view engine', 'pug' )
    .set( 'views', viewsDir )
    .set( 'port', port )
    //ejecutando middlewares
    .use( publicDir )
    .use( morgan('dev') )
    //ejecutando el middleware enrutador
    .use( '/', routes )
    .listen(port, async ()=>{
        console.log(`Iniciando en el puerto ${port}`)
        try{
            await sequelize.authenticate()
            console.log('Conectado a la base de datos...')
        }catch(e){
            console.log('Error al conectar a la base de datos: ', e)
        }
    })

module.exports = app


