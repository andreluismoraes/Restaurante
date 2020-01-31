const PRODUTO = require('../model/produtoModel')

module.exports = {
    async index(req, res){
        /**trazendo todos os produtos cadastrados */
        const produto = await PRODUTO.find()
        return res.json(produto)
    },

    async store(req, res){
        /**cadastrando produtos */
        const produto = await PRODUTO.find()
        return res.json(produto)
    },

    async findProduct(req, res){
        /** achando um produto por nome */
        const produto = await PRODUTO.find()
        return res.json(produto)
    }
}