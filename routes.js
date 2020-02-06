const {Router} = require('express')
const USER = require('./controller/userController')
const CLIENTE = require('./controller/clienteController')
const PRODUTO  = require('./controller/produtoController')
const VENDA = require('./controller/vendaController')
const multer = require('multer')
const multerConfig = require('./utils/uploadImage')

const routes = Router()

/**Usando as rotas de usuarios */
routes.get('/user', USER.index)
routes.get('/user/login', USER.loginUser)
routes.post('/user', USER.store)

/**Usando as rotas dos clientes */
routes.get('/cliente', CLIENTE.index)
routes.get('/findCliente', CLIENTE.findCliente)
routes.post('/cliente', CLIENTE.store)

/**Usando as rotas dos produtos */
routes.get('/produto', PRODUTO.index)
routes.get('/findProduto', PRODUTO.findProduct)
routes.post('/produto', PRODUTO.store)
routes.post('/produtoImagem', multer(multerConfig).single('file'), PRODUTO.storeImage)

/**Usando as rotas de vendas */
routes.get('/venda', VENDA.index)
routes.get('/findVenda', VENDA.findVenda)
routes.post('/venda', VENDA.store)
routes.get('/generateQrCode', VENDA.generateQrCode)

routes.get('/sendEmail', CLIENTE.sendMail)

module.exports = routes