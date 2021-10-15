const express = require('express')
const router = express.Router()

var userController = require('../api/controllers/user')

module.exports = () => {
    router.get('/', userController.get)
    router.post('/', userController.post)
    return router
}