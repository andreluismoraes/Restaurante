const mongoose = require('mongoose')

const PedidoSchema = mongoose.Schema({
    codigoPedido: Number,
    codigoProduto: [mongoose.Types.ObjectId],
})

module.exports = mongoose.model('Pedido', PedidoSchema)