const PEDIDO = require('../model/pedidoModel')
const VENDA = require('../model/vendasModel')

module.exports = {
    async index(req, res){
        /**procurar todos os pedidos e mostrar todos os dados */
        const pedido = await PEDIDO.find().populate('codigoProduto')
        return res.json(pedido)
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

        return res.json(pedido)
    },

    /**esperar ajustar o novo modelo de venda */
    async fecharPedido(req, res){
        const {codigoPedido} = req.query

        /**achando o pedido */
        const pedido = await PEDIDO.find(
            {codigoPedido}
        ).populate('codigoProduto')

        //fechando o pedido
        await VENDA.insertMany(
            {produtoVenda: pedido}
        )

        return res.json(pedido)
    }
}

/**codigoPedido: Number,
    codigoMesa: mongoose.Types.ObjectId,
    codigoProduto: [mongoose.Types.ObjectId], */