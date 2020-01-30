const USER = require('../model/userModel')

module.exports = {
    async index(req, res){
        return res.json({message: 'estou no controller'})
    }
}