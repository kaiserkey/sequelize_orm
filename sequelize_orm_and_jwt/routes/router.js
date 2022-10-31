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
router.get('/posts/all' , PostController.index)
router.post('/posts/update' , PostController.update)
router.post('/posts/delete' , PostController.delete)
router.post('/posts/show' , PostController.show)




module.exports  = router