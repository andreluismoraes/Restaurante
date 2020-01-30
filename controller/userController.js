const USER = require('../model/userModel')

module.exports = {
    /**listando todos os usuarios */
    async index(req, res){
        const user = await USER.find()
        return res.json(user)
    },

    /** salvando um usuario com findOneAndUpdate*/
    async store(req, res){
        const {nomeUser, cpfUser, loginUser, senhaUser, funcaoUser, emailUser, telefoneUser, dataNascimentoUser, enderecoUser} = req.body

        const user = await USER.findOneAndUpdate(
            //search
            {cpfUser},
            //atualizando ou inserindo os dados
            {$set: {cpfUser, nomeUser, loginUser, senhaUser, funcaoUser, emailUser, telefoneUser, dataNascimentoUser, enderecoUser}},
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