const {Router} = require('express')
const USER = require('./controller/userController')

const routes = Router()

/**Usando as rotas de usuarios */
routes.get('/user', USER.index)
routes.post('/user', USER.store)

module.exports = routes