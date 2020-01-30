const USER = require('../model/userModel')

module.exports = {
    async index(req, res){
        const user = await USER.find()
        return res.json(user)
    },

    async cadUser(req, res){
        /**Usando o findOneAndUpdate e consultando o campo cpf como unico
         * se cpf não existir ele cria um usuario caso contrário ele só altera os dados do usuario menos cpf
        */
        const user = {message: 'teste'}
        return res.json(user)
    }
}