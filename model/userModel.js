const mongoose = require('mongoose')

const USERSchema = new mongoose.Schema({
    nomeUser: String,
    emailUser: String,
    telefoneUser: String,
    dataNascimentoUser: Date,
    enderecoUser: Object
})

module.exports = mongoose.model('USER', USERSchema)