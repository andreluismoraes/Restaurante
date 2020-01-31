const CLIENTE  = require('../model/clienteModel')

module.exports = {
    async index(req, res){
        res.json({message: 'Cliente controllers'})
    }
}