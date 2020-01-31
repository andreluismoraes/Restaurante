const mongoose = require('mongoose')

const ProdutoSchema = new mongoose.Schema({
    nome: String,
    valor: Double,
    quantidade: Number,
    validate: Date,
})

module.exports = mongoose.model('Produto', ProdutoSchema)