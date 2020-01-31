const mongoose = require('mongoose')



const ProdutoSchema = new mongoose.Schema({
    nome: String,
    valor: Number,
    quantidade: Number,
    validate: Date,
})

module.exports = mongoose.model('Produto', ProdutoSchema)