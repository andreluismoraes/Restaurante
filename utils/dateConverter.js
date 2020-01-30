//convertendo o dia de hoje para um formato simples (YYYY-MM-DD)

module.exports = {
    parseDate(data){
        const string = data.split('/')
        const [day, month, year] = string
        return [year, month, day]
    }
} 
