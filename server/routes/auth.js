const express = require('express')
const router = express.Router()

//Import Controllers Methods:
const {login} = require('../controllers/login')


router.post('/login', login);








module.exports = router