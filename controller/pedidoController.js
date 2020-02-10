const PEDIDO = require('../model/pedidoModel')

module.exports = {
    async index(req, res){
        const pedido = await PEDIDO.find()

        res.json(pedido)
    },

    
}