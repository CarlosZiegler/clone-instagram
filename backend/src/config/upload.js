const multer = require('multer');
const path = require('path');

module.exports= {
    storage: new multer.diskStorage({
        // entra na pasta config  e volta duas vezes para entrar no uploads
        destination: path.resolve(__dirname, '..', '..', 'uploads' ),
        //pega o nome original do arquivo
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    })


};