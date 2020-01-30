const mongoose = require('mongoose')

const USERSchema = new mongoose.Schema({
    nomeUser: String,
    cpf: Number,
    emailUser: String,
    telefoneUser: String,
    dataNascimentoUser: Date,
    enderecoUser: Object
})

module.exports = mongoose.model('USER', USERSchema)