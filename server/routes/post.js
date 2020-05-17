const express = require('express')
const router = express.Router()

//Import Controllers Methods:
const {create, list, read, remove, update} = require('../controllers/post')
const {requireSignin} = require('../controllers/login')

//router.get('/post', create)
router.post('/post', requireSignin, create);

router.get('/posts', list);

router.get('/post/:slug', read);

router.put('/post/:slug', requireSignin, update);

router.delete('/post/:slug', requireSignin, remove); //can't use delete as a controller name because it is a resered name in Js.


//TESTING SECRET:
// router.get('/secret', requireSignin, (req, res) => {
//     res.json({
//         data: req.user.name
//     })
// })



module.exports = router