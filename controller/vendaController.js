const VENDA = require('../model/vendasModel')
const USER = require('../model/userModel')
const PRODUTO = require('../model/produtoModel')
const CLIENTE = require('../model/clienteModel')

module.exports = {
    /**mostrar todas as vendas */
    async index(req, res){
        const venda = await VENDA.find()
        return res.json(venda)
    },

    /**salvar uma venda */
    async store(req, res){
        const {cpfUser, cpfCliente, produtoVenda } = req.body

        /** localizando usuario */
        const userVenda = await USER.find(
            {cpfUser}
        ).select('nomeUser')

        /**localizando  cliente*/
        const clienteVenda = await CLIENTE.find(
            {cpfCliente}
        ).select('nomeCliente')

        const dataVenda = new Date()

        /**cadastrando ou alterando uma venda */
        const venda = await VENDA.findOneAndUpdate(
            //search
            {dataVenda},
            //atualizando ou inserindo os dados
            {$set: {userVenda, clienteVenda, produtoVenda, dataVenda}},
            //habilitando upsert e retornando new:true
            {upsert: true, new: true}
        )

        return res.json(venda)
    }
}


/**
 * userVenda: Object,
    clienteVenda: Object,
    produtoVenda: [Object],
    totalVenda: Number,
    dataVenda: Date
 */