const USER = require('../model/userModel')
const verifycpf = require('../utils/cpfValidatorUtil')
const convertDate = require('../utils/dateConverter')
const validateDate = require('validate-date')
const Street = require('../utils/findStreet')

module.exports = {
    /**listando todos os usuarios */
    async index(req, res){
        const user = await USER.find()
        return res.json(user)
    },

    /** salvando um usuario com findOneAndUpdate*/
    async store(req, res, next){
        const {nomeUser, cpfUser, loginUser, senhaUser, funcaoUser, emailUser, telefoneUser, dataNascimentoUser, endereco} = req.body

        //verificando cpf
        if(!verifycpf.verify(cpfUser)){
            return res.json({message: "CPF Inválido"})
        }

        //verificando data
        const date = validateDate(dataNascimentoUser)
        if(date == 'Invalid Format'){
            return res.json({message: "Data Invalida"})
        }
        
        //realizando conversão da data para o formato do banco de dados
        const nascimentoUser = convertDate.parseDate(dataNascimentoUser)

        const enderecoUser = await Street.findendereco(endereco)

        //cadastrando ou atualizando o usuario
        const user = await USER.findOneAndUpdate(
            //search
            {cpfUser},
            //atualizando ou inserindo os dados
            {$set: {cpfUser, nomeUser, loginUser, senhaUser, funcaoUser, emailUser, telefoneUser, nascimentoUser, enderecoUser}},
            //habilitando o upsert e retornando caso for novo
            {upsert: true, new: true}
        )
        return res.json(user)  
    },

    async findUserStreet(req, res){

    },

}

/**nomeUser: String,
    cpf: Number,
    loginUser: String,
    senhaUser: String,
    funcaoUser: String, 
    emailUser: String,
    telefoneUser: String,
    dataNascimentoUser: Date,
    enderecoUser: Object */