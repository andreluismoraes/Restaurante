const {Router} = require('express')
const USER = require('./controller/userController')
const CLIENTE = require('./controller/clienteController')

const routes = Router()

/**Usando as rotas de usuarios */
routes.get('/user', USER.index)
routes.get('/user/login', USER.loginUser)
routes.post('/user', USER.store)

/**Usando as rotas dos clientes */
routes.get('/cliente', CLIENTE.index)
routes.get('/findCliente', CLIENTE.findCliente)
routes.post('/cliente', CLIENTE.store)


module.exports = routes