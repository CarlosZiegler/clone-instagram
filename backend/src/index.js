const express = require('express');
const mongoose = require('mongoose');
const path = require ('path');
const cors = require ('cors');

//cria um servidos express
const app = express();

// suporte para http
const server = require('http').Server(app);

//suporte para websockets
const io = require('socket.io')(server);

//string de conexao com mongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0-rzeil.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true,
});

//disponibilizando as atualizacoes de post para todas as rotas 
app.use((req,res, next)=>{
    req.io = io;
    next();
});

//Deixa o backend acessivel para react no frontend
app.use(cors());

// a url abre a pasta onde estao as imagens salvos
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads', 'resized')))

//arquivos de rotas
app.use(require('./routes'));

// qual porta esta o servidor
server.listen(3333);
