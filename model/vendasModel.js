const moongoose = require('mongoose')

const VendaSchema = moongoose.Schema({
    userVenda: Object,
    clienteVenda: Object,
    produtoVenda: [Object],
    totalVenda: Number,
    dataVenda: Date
})

module.exports = moongoose.model("VENDA", VendaSchema)