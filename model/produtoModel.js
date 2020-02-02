const mongoose = require('mongoose')



const ProdutoSchema = new mongoose.Schema({
    codigoProduto: {
        type: { Number, 
                require: true
        }
    },
    nomeProduto: String,
    valorProduto: Number,
    quantidadeProduto: Number,
    validadeProduto: Date,
    /**modelo de adicionar imagens ao produto */
    imagemProduto: [Object]
})

module.exports = mongoose.model('Produto', ProdutoSchema)