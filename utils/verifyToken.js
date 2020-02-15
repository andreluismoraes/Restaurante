/**by rocket seat */

const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) =>{
    const [scheme, token] = req.headers.authorization.split(' ')

    //formato + hash
    //Bearer açdslkjasdfjk
    if(!token){
        return res.json({message: 'Nenhum token informado'})
        
    }

    // jwt.verify(token, process.env.secret, (err, decoded) =>{
    //     if(err){
    //         return res.json({message: 'Token inválido'})
    //     }
    // })

    jwt.verify(token, process.env.secret, (err, token) =>{
        if(err){
            return res.json({message: 'Token Inválido'})
        }else{
            return next()
        }
    })

    //return next()
}

