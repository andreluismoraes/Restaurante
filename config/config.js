const express = require('express')
const route = require('../routes')
const server = require('./server')

/**coloque este para funcionar o seu banco de dados */
//const server = require('./originalServer')

const app = express()

server.then(conection => conection.connect).catch(err => {message: err})

/**SEMPRE colocar esta função antes de usar as rotas */
app.use(express.json())

//usando as rotas
app.use(route)



//rodar a aplicação na porta 3000
app.listen(3000, console.log('Servidor rodando'))