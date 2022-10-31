const express = require('express'),
        router = express.Router(),
        //controllers
        AuthController = require('../controllers/AuthController'),
        PostController = require('../controllers/PostController'),
        { body, validationResult } = require('express-validator'),
        //Middlewares
        routes_protect = require('../middlewares/routes_protect')


router.get('/', (req, res)=>{
    res.render('index', {hola: 'hello'})
})

//dos rutas: login y registro
// /signin & /signup
router.post('/signin', AuthController.signIn)

router.post('/signup',
            //middleware validation
            body('password').isLength({ min: 5 }),
            AuthController.signUp)

router.get('/posts', routes_protect , PostController.index)




module.exports  = router