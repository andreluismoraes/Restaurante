const {Router} = require('express')

const routes = Router()

routes.get('/usuarios', (req, res) =>{
    res.json({message: "ola Mundo"})
})

module.exports = routes