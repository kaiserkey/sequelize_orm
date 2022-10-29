const Post = require('../models/Post'),
        Address = require('../models/Address'),
        User = require('../models/User')

//relacion uno a uno, usuario tiene una direccion
//añade una clave foranea userId a la tabla Address
User.hasOne(Address)
// User.hasOne(Address, {as: 'domicilio', foreignKey: 'residente_id'})

//añade una clave userId a la tabla address
Address.belongsTo(User)
// Address.belongsTo(Address, {as: 'residente', foreignKey: 'residente_id'})

//uno a muchos, 1 a N
// Usuario tiene muchos post o publicaciones
//se añade una clave userId a la tabla post
User.hasMany(Post)

//se añade una clave userId a la tabla post
Post.belongsTo(User)