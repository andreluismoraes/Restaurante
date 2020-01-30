const express = require('express')

const app = express()

app.use(express.json())

//rodar a aplicação na porta 3000
app.listen(3000, console.log('Servidor rodando'))