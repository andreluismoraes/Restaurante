const CLIENTE  = require('../model/clienteModel')
const convertDate = require('../utils/dateConverter')
const verifycpf = require('../utils/cpfValidatorUtil')
const Street = require('../utils/findStreet')
const validateDate = require('validate-date')


module.exports = {
    /**mostrando todos os clientes */
    async index(req, res){
        const cliente = await CLIENTE.find()
        return res.json(cliente)
    },

    /**salvando um cliente */
    async store(req, res, next){
        const {cpfCliente, nomeCliente, telefoneCliente, nascimentoCliente, endereco} = req.body

        //verificando cpf
        if(!verifycpf.verify(cpfCliente)){
            return res.json({message: "CPF Inválido"})
        }

        //verificando data
        const date = validateDate(nascimentoCliente)
        if(date == 'Invalid Format'){
            return res.json({message: "Data Invalida"})
        }

        //realizando conversão da data para o formato do banco de dados
        const aniversarioCliente = convertDate.parseDate(nascimentoCliente)

        //realizando a consulta do endereço
        const enderecoCliente = await Street.findendereco(endereco)


        //cadastrando ou atualizando o usuario
        const user = await CLIENTE.findOneAndUpdate(
            //search
            {cpfCliente},
            //atualizando ou inserindo os dados
            {$set: {cpfCliente, nomeCliente, telefoneCliente, aniversarioCliente, enderecoCliente}},
            //habilitando o upsert e retornando caso for novo
            {upsert: true, new: true}
        )
        return res.json(user)  
    },
}

/**cpfCliente: {
        type: Number,
        required: true
    },
    nomeCliente: String,
    telefoneCliente: String,
    enderecoCliente: Object,
    aniversarioCliente: Date */