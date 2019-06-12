const mongoose = require('mongoose');
// cria um model(tabela) com os seguintes dados
const PostSchema = new mongoose.Schema({

    author: String,
    place : String,
    description: String,
    hastags : String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }},{
    timestamps: true,   

});
//expporta o model(tabela) com nome de post e o esquema 
module.exports = mongoose.model('Post', PostSchema);