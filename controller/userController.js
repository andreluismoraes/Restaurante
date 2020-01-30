const USER = require('../model/userModel')

module.exports = {
    async index(req, res){
        const user = await USER.find()
        return res.json(user)
    }
}