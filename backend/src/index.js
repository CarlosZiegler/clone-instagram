const express = require('express');
const mongoose = require('mongoose');

//cria um servidos express
const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-rzeil.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true,
});

//arquivos de rotas
app.use(require('./routes'));

// qual porta esta o servidor
app.listen(3333);
