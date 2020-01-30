const mongoose = require('mongoose')

const USERSchema = new mongoose.Schema({
    nomeUser: String,
    cpfUser: {
        type: Number,
        required: true,
    },
    loginUser: String,
    senhaUser: String,
    funcaoUser: String, 
    emailUser: String,
    telefoneUser: String,
    dataNascimentoUser: Date,
    enderecoUser: Object
})

module.exports = mongoose.model('USER', USERSchema)