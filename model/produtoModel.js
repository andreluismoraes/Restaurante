const mongoose = require('mongoose')



const ProdutoSchema = new mongoose.Schema({
    nomeProduto: String,
    valorProduto: Number,
    quantidadeProduto: Number,
    validadeProduto: Date
})

module.exports = mongoose.model('Produto', ProdutoSchema)