const express = require('express'),
        router = express.Router(),
        //controllers
        UserController = require('../controllers/UserController'),
        AddressController = require('../controllers/AddressController')

router.get('/', (req, res)=>{
    res.end('<h1>Hello</h1>')
})

router.get('/allUsers', UserController.all)
router.get('/allAddress', AddressController.all)



module.exports  = router