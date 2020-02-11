const mongoose = require('mongoose')

const PedidoSchema = new mongoose.Schema({
    garcom: {
        type: mongoose.Types.ObjectId,
        ref: 'Garcom'
    },
    codigoPedido: Number,
    codigoMesa: {
       type: mongoose.Types.ObjectId,
       ref: 'Mesa'
    },
    codigoProduto: [
        { 
            type: mongoose.Types.ObjectId, 
            ref: 'Produto' 
        }
    ]
})

module.exports = mongoose.model('Pedido', PedidoSchema)