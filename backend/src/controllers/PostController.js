const Post = require('../models/Post');
const sharp = require('sharp');
const path = require ('path');
const fs = require('fs');

module.exports = {

    async index(req, res){
        // posts recebe o resultado de pesquisa de todos os posts no Banco de Dados
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    },

    async store (req, res ) {
        
        // busca os valores no corpo do meu body
        const {author, place, description, hashtags } = req.body;
        const {filename: image} = req.file;

        // salva o arquivo com extensao .jpg
        const[name] = image.split('.');
        const fileName = `${name}.jpg`;

        //redimensionamento das imagens e local onde salvar a imagem
        await sharp(req.file.path)
            .resize(500)
            .jpeg({quality: 70})
            .toFile(
                path.resolve(req.file.destination,'resized', fileName)
            )
        //deleta a imagem que nao foi redimencionada
        fs.unlinkSync(req.file.path);

        //cria um novo post
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            fileName,
        })
        // vai emitir por websockets todos os usuarios que tem post, enviando mensagem post e o objeto post
        req.io.emit('post', post);
        
        console.log( res.json(post));
        // retorna Json com os posts
        return res.json(post);

    }



};