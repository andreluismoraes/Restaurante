const mongoose = require('mongoose')

const ImagemSchema = new mongoose.Schema({
    nomeImagem: String,
    localImagem: String,
    protudoImagem: Object
})

module.exports = mongoose.model('IMAGEM', ImagemSchema)