const PRODUTO = require('../model/produtoModel')
const convertDate = require('../utils/dateConverter')
const validateDate = require('validate-date')

module.exports = {
    async index(req, res){
        /**trazendo todos os produtos cadastrados */
        const produto = await PRODUTO.find()
        return res.json(produto)
    },

    //cadastrando produtos
    async store(req, res){
        const {codigoProduto, nomeProduto, valorProduto, quantidadeProduto, validade} = req.body

        //verificando data
        const date = validateDate(validade)
        if(date == 'Invalid Format'){
            return res.json({message: "Data Invalida"})
        }

        //realizando conversão da data para o formato do banco de dados
        const validadeProduto = convertDate.parseDate(validade)        

        /**cadastrando produtos usando o findOneAndUpdate*/
        const produto = await PRODUTO.findOneAndUpdate(
            //search
            {codigoProduto},
            //inserindo o produto ou atualizando
            {$set: {codigoProduto, nomeProduto, valorProduto, quantidadeProduto, validadeProduto}},
            //habilitando o upsert: true, e retornando com new:true
            {upsert: true, new: true}
        )
        return res.json(produto)
    },

    async findProduct(req, res){
        const nomeProduto = req.query.produto
        /** achando um produto por nome */
        const produto = await PRODUTO.find(
            //search
            {nomeProduto}
        )
        return res.json(produto)
    }
}

/**nome: String,
    valor: Number,
    quantidade: Number,
    validade: Date */