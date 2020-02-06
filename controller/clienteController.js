const CLIENTE  = require('../model/clienteModel')
const convertDate = require('../utils/dateConverter')
const verifycpf = require('../utils/cpfValidatorUtil')
const Street = require('../utils/findStreet')
const validateDate = require('validate-date')
const email = require('../email/email') /**minha configuração */
/*const emailConfig = require('../config/email') use esta configuração quando você for configurar*/


module.exports = {
    /**mostrando todos os clientes */
    async index(req, res){
        const cliente = await CLIENTE.find()
        return res.json(cliente)
    },

    /**salvando um cliente */
    async store(req, res){
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

    /**localizando um cliente por cpf */
    async findCliente(req, res){
        const cpfCliente = req.query.cpf
        
        const cliente = await CLIENTE.find(
            //search
            {cpfCliente}
        )
        return res.json(cliente)
    },

    async sendMail(req, res){
        const {nomeCliente, emailCliente, assunto, texto} = req.body

        email.sendMail({
            from: 'seu email',
            to: emailCliente,
            subject: assunto,
            text: `Ola ${nomeCliente, ' ' + texto}` 
        })
        res.json({message: "Mensagem enviada com sucesso!!"})
    }
}

/**cpfCliente: {
        type: Number,
        required: true
    },
    nomeCliente: String,
    telefoneCliente: String,
    enderecoCliente: Object,
    aniversarioCliente: Date */