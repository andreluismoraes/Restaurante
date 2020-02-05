const PRODUTO = require('../model/produtoModel')
const convertDate = require('../utils/dateConverter')
const validateDate = require('validate-date')

module.exports = {
    /**mostrando todos os produtos */
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

    /**produrando um produto por nome */
    async findProduct(req, res){
        const nomeProduto = req.query.produto
        /** achando um produto por nome */
        const produto = await PRODUTO.find(
            //search
            {nomeProduto}
        )
        return res.json(produto)
    },

    /**adicionando imagens ao produto */
    /**achei melhor montar a imagem do produto separado pois o store está com muito código ----> ^(*-*)^ ---- */
    async storeImage(req, res){
        const {originalname, destination, filename, path, size} = await req.file
        
        const codigoProduto = req.query

        const produto = await PRODUTO.findOneAndUpdate(
            //search
            {codigoProduto},
            //update
            {$set: {imagemProduto: {originalname, destination, filename, path, size}}},
            //habilitando o upsert do produto e retornando com new:true
            {upsert: true, new: true}
        )

        res.json(produto)
    },
}

/**codigoProduto: {
        type: { Number, 
                require: true
        }
    },
    nomeProduto: String,
    valorProduto: Number,
    quantidadeProduto: Number,
    validadeProduto: Date,
    imagemProduto: [Object] */

    /**imagem{
     originalname: String,
        destination: String,
        filename: String,
        path: String,
        size: Number
    }*/