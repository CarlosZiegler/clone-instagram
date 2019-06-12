const express =  require('express');
const routes = new express.Router();

//cria rota raiz do servidor, tendo uma funcao com parametros req e res: uma requisicao e um resposta
routes.get('/',(req,res)=> {
    // enviadno uma response pegando o name como parametro, passado por localhost:3333?name=Carlos
    return res.send(`Hello ${req.query.name}`);

});

module.exports = routes;