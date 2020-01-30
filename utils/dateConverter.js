
module.exports = {
    parseDate(data){
        const string = data.split('/')
        const [day, month, year] = string
        return [year, month, day]
    }
} 
