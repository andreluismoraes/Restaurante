const MESA = require('../model/mesaModel')

module.exports = {
    async index(req, res){
        const mesa = await MESA.find()
        return res.json(mesa)
    },

    async store(req, res){
        /**adicionando uma mesa não irá precisar digitar um código de uma mesa
         * só adicionar mesmo
         */

        /**trazendo o ultimo cadastro realizado e acrescentando mais uma unidade*/
        const codigo = await MESA.find().limit(1).sort({$natural: -1})
        codigoMesa = codigo.map(data => data.codigoMesa)
        codigoMesa++

        /**cadastrando uma nova mesa */
        const mesa = await MESA.findOneAndUpdate(
            {codigoMesa},
            {$set: { codigoMesa }},
            {upsert: true, new: true}
        )

        return res.json(mesa)
    },

}

/**codigoMesa: Number, */