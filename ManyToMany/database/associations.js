const Post = require('../models/Post'),
        Address = require('../models/Address'),
        User = require('../models/User'),
        Band = require('../models/Band')

//relacion uno a uno, usuario tiene una direccion
//añade una clave foranea userId a la tabla Address
User.hasOne(Address)
//si añadimos alias podemos usar los metodos magicos setAlias y getAlias
// User.hasOne(Address, {as: 'domicilio', foreignKey: 'residente_id'})
//añade una clave userId a la tabla address
Address.belongsTo(User)
// Address.belongsTo(Address, {as: 'residente', foreignKey: 'residente_id'})

//uno a muchos, 1 a N
// Usuario tiene muchos post o publicaciones
//se añade una clave userId a la tabla post
User.hasMany(Post)
//User.hasMany(Post, { as: 'publicaciones', foreignKey: 'autorId' })
//se añade una clave userId a la tabla post
Post.belongsTo(User)
//User.hasMany(Post, { as: 'autor' })

//NaN relacion muchos a muchos
//el usuario pertenece a varias bandas
//esto crea una nuev atabla en la base de datos llamada user_band para hace rla relacion
//user.addBand user.getBand...
User.belongsToMany(Band, {through: 'user_band', timestamps: false})
Band.belongsToMany(User, {through: 'user_band', timestamps: false})


