const generateToken = require('jsonwebtoken')
const TOKEN = require('../model/tokenUser')
require('dotenv').config()

module.exports = {
    async index(req, res){
        const token = await TOKEN.find()
        return res.json(token)
    },

    async store(req,res){
        const {idUser} = req.body
        const idToken = generateToken.sign({id: idUser}, process.env.secret, {expiresIn: 300})
        

        const token = await TOKEN.updateOne(
            {idToken},
            {$set: {idUser, idToken}},
            {upsert: true, new:true}
        )
        return res.json(token)
    }
}

/**idUser:
    idToken: String */