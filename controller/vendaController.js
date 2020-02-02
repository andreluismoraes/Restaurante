const VENDA = require('../model/vendasModel')
const USER = require('../model/userModel')
const PRODUTO = require('../model/produtoModel')
const CLIENTE = require('../model/clienteModel')
const qrcode = require('qrcode')
const fs = require('fs')


module.exports = {
    /**mostrar todas as vendas */
    async index(req, res){
        const venda = await VENDA.find()
        return res.json(venda)
    },

    /**salvar uma venda */
    async store(req, res){
        const {cpfUser, cpfCliente, produtos } = req.body

        /** localizando usuario */
        const userVenda = await USER.find(
            {cpfUser}
        ).select('nomeUser')

        /**localizando  cliente*/
        const clienteVenda = await CLIENTE.find(
            {cpfCliente}
        ).select('nomeCliente')

        /**Insrindo o dia de hoje */
        const dataVenda = new Date()

        /**iniciando os produtos vazio */
        let produtoVenda = []

        /**iniciando o total da venda = 0 */
        let totalVenda = 0

        /**percorrendo os produtos inseridos */ /**funcionando */
        for(let i = 0; i < produtos.length; i++){
            /**produrando os produtos adicionados e selecionando campos especificos */
            let inserirProduto = await PRODUTO.find(
                produtos[i]
            ).select('codigoProduto').select('valorProduto')

            /**retirando a quantidade do produto */
            let codigoProduto = produtos[i].codigoProduto
            await PRODUTO.findOneAndUpdate(
                {codigoProduto},
                {$inc: {quantidadeProduto: -1}}
            )

            /**Adicionando o produto na venda */
            produtoVenda.push(inserirProduto)

            /**calculando o total da venda */
            totalVenda += parseFloat(inserirProduto.map(data => data.valorProduto))
        }

        /**cadastrando ou alterando uma venda */
        const venda = await VENDA.findOneAndUpdate(
            //search
            {dataVenda},
            //atualizando ou inserindo os dados
            {$set: {userVenda, clienteVenda, produtoVenda, dataVenda, totalVenda}},
            //habilitando upsert e retornando new:true
            {upsert: true, new: true}
        )

        return res.json(venda)
    },

    /** filtrar todas as vendas de uma data */
    async findVenda(req, res){
        const {dataInicial, dataFinal} = req.query

        if(Date.parse(dataFinal) > Date.parse(dataInicial)){
            return res.json({message: 'A data final é maior que a data inicial'})
        }

        /**procurando uma venda em um intervalo de datas */
        /**$gte = maior ou igual que*/
        /**$lt = menor que */
        const venda = await VENDA.find(
            //search
            {dataVenda: {$gte: dataInicial, $lt:dataFinal}}
        )
        return res.json(venda)
    },

    /**gerando qrcode */
    async generateQrCode(req, res){
        const venda = await VENDA.find(
            //search
            {dataVenda: req.query.data}
        ).select('totalVenda')

        /**gerando o qrCode */
        const qr = await qrcode.toDataURL(venda);

        fs.writeFileSync('./qr.html', `<img src="${qr}">`);
        console.log('Wrote to ./qr.html');
        
        // // /**fim da geração do Qr */

        return res.json({message: 'QRCode gerado com sucesso!'})
    }
}


/**
 * userVenda: Object,
    clienteVenda: Object,
    produtoVenda: [Object],
    totalVenda: Number,
    dataVenda: Date
 */