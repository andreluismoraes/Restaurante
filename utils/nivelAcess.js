const USER = require('../model/userModel')

module.exports = async (req, res, next) =>{
    const {cpfUser} = req.query
    const user = await USER.find({cpfUser}).select('funcaoUser')

    const verifica = user.map(data => data.funcaoUser)

    if(verifica == 'administrador'){
        return next()
    }else{
        return res.json({message: 'Não é possível acessar'})
    }

    return next()
}