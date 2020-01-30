const express = require('express')
const route = require('../routes')

/**coloque este para funcionar o seu banco de dados */
//const server = require('./originalServer')

const server = require('./server')


const app = express()

//usando as rotas
app.use(route)

//usando a conexão com o banco de dados
server.then(conection => conection.connect).catch(err => {message: err})

app.use(express.json())

//rodar a aplicação na porta 3000
app.listen(3000, console.log('Servidor rodando'))