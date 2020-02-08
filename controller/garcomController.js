const GARCOM = require('../model/garcomModel')

module.exports = {
    async index(req, res){
        const mesa = await GARCOM.find()
        res.json(mesa)
    },

    async store(req, res){
        const mesa = await GARCOM.find()
        res.json(mesa)
    },

}