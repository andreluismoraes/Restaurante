/**by rocket seat */

const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) =>{
    const [scheme, token] = req.headers.authorization.split(' ')

    //formato + hash
    //Bearer açdslkjasdfjk
    if(!token){
        res.json({message: 'Nenhum token informado'})
    }

    jwt.verify(token, process.env.secret, (err, decoded) =>{
        if(err){
            res.json({message: 'Token inválido'})
        }
    })

    return next()
}

