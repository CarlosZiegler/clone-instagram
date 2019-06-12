const express =  require('express');
const PostController = require('./controllers/PostController');
const multer = require('multer');

const routes = new express.Router();
const upload = multer();

//cria rota raiz do servidor, tendo uma funcao com parametros req e res: uma requisicao e um resposta
routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;