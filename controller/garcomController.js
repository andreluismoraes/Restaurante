const GARCOM = require('../model/garcomModel')
const bcrypt = require('bcryptjs')

module.exports = {
    async index(req, res){
        const garcom = await GARCOM.find()
        res.json(garcom)
    },

    async store(req, res){
        const {nomeGarcom, cpfGarcom, usuarioGarcom, senha} = req.body

        const senhaGarcom = bcrypt.hashSync(senha, 10)

        const garcom = await GARCOM.findOneAndUpdate(
            //search
            {cpfGarcom},
            //atualizando ou inserindo com $set
            {$set: { nomeGarcom, cpfGarcom, usuarioGarcom, senhaGarcom}},
            //habilistando o upsert e o new para retorno
            {upsert: true, new: true}
        )

        res.json(garcom)
    }
}

/**    nomeGarcom: String,
    cpfGarcom: Number,
    usuarioGarcom: String,
    senhaGarcom: String */
