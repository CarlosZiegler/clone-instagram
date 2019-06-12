const express =  require('express');
const PostController = require('./controllers/PostController');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);

//cria rota raiz do servidor, tendo uma funcao com parametros req e res: uma requisicao e um resposta, usa o Multer para receber o arquivo, e usa o Postcontroller metodo  store
routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;