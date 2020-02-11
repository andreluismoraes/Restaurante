const moongoose = require('mongoose')

const VendaSchema = moongoose.Schema({
    userVenda: Object,
    clienteVenda: Object,
    produtoVenda: [
        {
            type: moongoose.Types.ObjectId,
            ref: 'Produto'
        }
    ],
    totalVenda: Number,
    dataVenda: Date
})

module.exports = moongoose.model("VENDA", VendaSchema)