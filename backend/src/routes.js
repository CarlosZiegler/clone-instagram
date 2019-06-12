const express =  require('express');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const multer = require('multer');
const uploadConfig = require('./config/upload');

//rotas
const routes = new express.Router();

// configuracao de uploads com multer 
const upload = multer(uploadConfig);

//cria rota raiz do servidor, tendo uma funcao com parametros req e res: uma requisicao e um resposta, usa o Multer para receber o arquivo, e usa o Postcontroller metodo  store
routes.post('/posts', upload.single('image'), PostController.store);

// rota para buscar os posts com metodo get
routes.get('/posts', PostController.index);

// rota para somar um like no post
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;