const Post = require('../models/Post');

module.exports = {

    async index(req, res){
        // posts recebe o resultado de pesquisa de todos os posts no Banco de Dados
        const posts = await Post.find().sort('createAt');
        return res.json(posts);
    },

    async store (req, res ) {
        console.log(req.body);
        console.log(req.file);
        // busca os valores no corpo do meu body
        const {author, place, description, hashtags } = req.body;
        const {filename: image} = req.file;
        //cria um novo post
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image
        })

        return res.json(post);

    }

};