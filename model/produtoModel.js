const mongoose = require('mongoose')



const ProdutoSchema = new mongoose.Schema({
    nome: String,
    valor: Number,
    quantidade: Number,
    validade: Date
})

module.exports = mongoose.model('Produto', ProdutoSchema)