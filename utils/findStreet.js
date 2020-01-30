const axios = require('axios')

module.exports = {
    async findendereco(cep){
        const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return endereco.data
    }
}