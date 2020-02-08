const MESA = require('../model/mesaModel')

module.exports = {
    async index(req, res){
        const mesa = await MESA.find()
        res.json(mesa)
    },

    async store(req, res){
        const mesa = await MESA.find()
        res.json(mesa)
    },

}