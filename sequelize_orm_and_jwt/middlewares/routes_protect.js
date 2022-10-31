const jwt = require('jsonwebtoken'),
        auth = require('../config/auth'),
        { dbConfig } = require('../database/db_con')

module.exports = (req, res, next)=>{
    //const tokenCookie = req.cookies['x-access-token'];
    //res.clearCookie('x-access-token')
    //console.log(tokenCookie)
    //comprobar que existe el token
   /*  !req.headers.authorization */
    if( !req.headers.authorization ){
        res.status(401).json({
            msg: 'Acceso no autorizado'
        })
    }else{
        //comprobar la validez del token
        const token = req.headers.authorization.split(' ')[1]
        
        jwt.verify(token, auth.secret, (err, decoded)=>{
            if(err){
                res.status(500).json({
                    msg: 'Ocurrio un problema en la autenticacion del token'
                })
            }else{
                dbConfig.User.findByPk( decoded.user.id, { include: 'users' } ).then(
                    user => {
                        console.log(user.users[0].role)
                        req.user = user
                        next()
                    }
                )
            }
        })
        
    }
    
}