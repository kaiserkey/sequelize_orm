const { dbConfig } = require('../database/db_con'),
        bcrypt = require('bcrypt'),
        jwt = require('jsonwebtoken'),
        authConf = require('../config/auth'),
        { body, validationResult } = require('express-validator')


module.exports = {
    async signIn(req,res){
        
        try {
            const {email, password} = req.body

            const user = await dbConfig.User.findOne(
                {
                    where: {
                        email: email
                    }
                }
            )
            
            if(!user){
                res.status(404).json({
                    msg: 'El usuario solicitado no existe'
                })
            }else{
                if(bcrypt.compareSync(password, user.password)){
                    //devolver token
                    const token = await jwt.sign({user: user}, authConf.secret, {
                        expiresIn: authConf.expire
                    })
                    
                    res.json({
                        user: user,
                        token: token
                    })

                    /* let options = {
                        path:"/",
                        sameSite:true,
                        maxAge: 1000 * 60 * 60 * 24, // would expire after 24 hours
                        httpOnly: true, // The cookie only accessible by the web server
                    }
                
                    res.cookie('x-access-token',token, options) 
                    res.redirect('/') */
                    
                    

                }else{
                    res.status(401).json({
                        msg: 'Contraseña incorrecta'
                    })
                }
            }

        } catch (error) {
            res.status(500).json(error)
        }
    },

    async signUp(req,res){
        //crear un usuario
        const errors = validationResult(req)
            if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const hash = bcrypt.hashSync(req.body.password, parseInt(authConf.round))
        
        const user = await dbConfig.User.create(
                {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                }
        )

        if(user){
            const token = await jwt.sign({user: user}, authConf.secret, {
                expiresIn: authConf.expire
            })

            if(token){
                res.json({
                    user: user,
                    token: token
                })
            }
        }
        
    }
}