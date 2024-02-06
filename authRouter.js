const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require('express-validator')

router.post('/registration', [
    check('username', "The field must not be empty").notEmpty(),
    check('password', "Password must be greater than 8 and less than 10 characters").isLength({min:8, max:10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router

