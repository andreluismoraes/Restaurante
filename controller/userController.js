const USER = require('../model/userModel')

module.exports = {
    /**listando todos os usuarios */
    async index(req, res){
        const user = await USER.find()
        return res.json(user)
    },

    /** salvando um usuario com findOneAndUpdate*/
    async store(req, res){
        
        return res.json()
    },

    async findUserStreet(req, res){

    },

}