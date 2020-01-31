const mongoose = require('mongoose')

const USERSchema = new mongoose.Schema({
    nomeUser: String,
    cpfUser: {
        type: Number,
        required: true,
    },
    loginUser: String,
    senhaUser: {
        type: String,
        select: false
    },
    funcaoUser: String, 
    emailUser: String,
    telefoneUser: String,
    nascimentoUser: Date,
    enderecoUser: Object,
})

module.exports = mongoose.model('USER', USERSchema)