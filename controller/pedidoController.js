const PEDIDO = require('../model/pedidoModel')

module.exports = {
    async index(req, res){
        /**procurar todos os pedidos e mostrar todos os dados */
        const pedido = await PEDIDO.find().populate('codigoProduto')
        res.json(pedido)
    },

    async store(req, res){
        const {codigoPedido, codigoMesa, codigoProduto} = req.body

        /**cadastrando um pedido */
        const pedido = await PEDIDO.findOneAndUpdate(
            //search
            {codigoPedido},
            //inserir ou atualizar
            {$set: { codigoPedido, codigoMesa, codigoProduto}},
            //habilitando o upsert e o retorno new:true
            {upsert: true, new: true}
        )

        res.json(pedido)
    }
}

/**codigoPedido: Number,
    codigoMesa: mongoose.Types.ObjectId,
    codigoProduto: [mongoose.Types.ObjectId], */