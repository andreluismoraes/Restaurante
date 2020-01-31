/**modelo de cliente */
const mongoose = require('mongoose')

const ClienteSchema = new mongoose.Schema({
    cpfCliente: {
        type: Number,
        required: true
    },
    nomeCliente: String,
    telefoneCliente: String,
    enderecoCliente: Object,
    aniversarioCliente: Date
})

module.exports = mongoose.model('Cliente', ClienteSchema)
