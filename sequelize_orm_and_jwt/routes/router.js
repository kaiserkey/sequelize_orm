const express = require('express'),
        router = express.Router(),
        //controllers
        AuthController = require('../controllers/AuthController'),
        PostController = require('../controllers/PostController'),
        { body, validationResult } = require('express-validator'),
        //Middlewares
        routes_protect = require('../middlewares/routes_protect')

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

router.get('/' ,(req, res)=>{
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
router.get('/posts/all' ,PostController.index)
router.post('/posts/update' ,PostController.find, PostController.update)
router.post('/posts/delete' ,PostController.find, PostController.delete)
router.post('/posts/show' , PostController.find,PostController.show)

router.use(err404)



module.exports  = router