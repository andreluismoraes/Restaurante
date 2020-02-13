const mongoose = require('mongoose')

const TokenUserSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Types.ObjectId,
        ref: 'USER'
    },
    idToken: String
})

module.exports = mongoose.model('TokenUser', TokenUserSchema)