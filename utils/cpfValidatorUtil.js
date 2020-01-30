const CPF = require('cpf')

module.exports = {
    verify(cpf){
        const isValidCPF = CPF.isValid(cpf, false)
        return isValidCPF
    }
}