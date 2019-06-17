const Post = require('../models/Post');

module.exports = {

    // busca o post com o id passado pela URL e soma 1 no atributo Like salva e retorna o post atualizado
    async store (req, res ) {
        // Pesquisa o post pelo id passado 
        const post = await Post.findById(req.params.id);

        //soma 1 Like no post
        post.likes += 1;

        //salva o post
        await post.save();

        // vai emitir por websockets todos os usuarios que tem post, enviando mensagem post e o objeto post
        req.io.emit('like', post);
       
        // retorna o post atualizado
        return res.json(post);

    }

};