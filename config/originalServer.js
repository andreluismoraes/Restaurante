const mongoose = require('mongoose')

const username = 'coloque seu usuario do mongodb, ou seja, o usuario que pode criar/alterar/deletar no seu banco'
const password = 'coloque a senha do usuario'
const banco = 'coloque o nome do banco que você irá usar'

const server = mongoose.connect(`mongodb+srv://${username}:${password}@server-dshxz.mongodb.net/${banco}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)

module.exports = server