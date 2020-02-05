/**by Rocket Seat */

const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
    dest: path.resolve(__dirname, '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', 'tmp', 'uploads'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err)
                /**hashando o nome do arquivo para evitar ser o mesmo nome */
                const filename = `${hash.toString('hex')}-${file.originalname}`

                cb(null, filename)
            })
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024, /**2 MB */
    },
    filefilter: (req, file, cb) =>{
        const allowedMimes = [ /**tipos de arquivos que vou aceitar */
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/pdf'
        ]

        if (allowedMimes.includes(file.mimetype)){
            cb(null, true)
        }else{
            cb(new Error('Invalid file type'))
        }
    }
}