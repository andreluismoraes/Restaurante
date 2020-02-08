const mongoose = require('mongoose')

const GarcomSchema = new mongoose.Schema({
    nomeGarcom: String,
    cpfGarcom: Number,
    usuarioGarcom: String,
    senhaGarcom: {
        type: String,
        select: false
    }
})

module.exports = mongoose.model('Garcom', GarcomSchema)