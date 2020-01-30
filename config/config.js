const express = require('express')
const route = require('../routes')

const app = express()

app.use(route)

app.use(express.json())

//rodar a aplicação na porta 3000
app.listen(3000, console.log('Servidor rodando'))