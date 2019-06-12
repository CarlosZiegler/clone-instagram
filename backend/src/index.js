const express = require('express');
const mongoose = require('mongoose');

//cria um servidos express
const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-rzeil.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true,
});

//cria rota raiz do servidor, tendo uma funcao com parametros req e res: uma requisicao e um resposta
app.get('/',(req,res)=> {
    // enviadno uma response pegando o name como parametro, passado por localhost:3333?name=Carlos
    return res.send(`Hello ${req.query.name}`);

});

// qual porta esta o servidor
app.listen(3333);
