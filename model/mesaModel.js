const mongoose = require('mongoose')

const MesaSchema = new mongoose.Schema({
    codigoMesa: Number,
})

module.exports = mongoose.model('Mesa', MesaSchema)