const {Router} = require('express')
const USER = require('./controller/userController')

const routes = Router()

/**Usando as rotas de usuarios */
routes.get('/usuarios', USER.index)

module.exports = routes