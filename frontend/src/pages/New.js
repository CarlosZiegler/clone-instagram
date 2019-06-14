import  React, {Component}  from "react";

//importando API
import api from '../services/api';


//Importando CSS
import './New.css';
// CNoveo componente em forma de classe
class New extends Component {
    // estado inicial do componente
    state={
        image : null,
        author : '',
        place : '',
        description : '',
        hashtags : '',
    }
    // funcao para buscar valores digitados, faz nesse formato para conseguir pegar o Valor This
    handleChange = e =>{
        //seta o state com a propiedade name do formulario e o valor que foi digitado no form
        this.setState({ [e.target.name]: e.target.value });

    }

    //pega salva a imagem, que vem de um array
    handleImageChange = e =>{
        //image recebe o valor do array index 0 
        this.setState({ image: e.target.files[0] });

    }

    //metodo para confirmar estado
    handleSubmit = async e =>{
        e.preventDefault();
        
        // variavel para gaudar o valor de cada campo
        const data = new FormData();
        
        //armazenando os dados na varavel
        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtag', this.state.hashtags);

        //enviando o data para api
        await api.post('posts', data);

        //redirecionar para feed
        this.props.history.push('/');
    }

    //metodo render do React para preencher o formulario Onchange -> metodo a ser chamado no submit 
    render(){
        return(
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleImageChange}/>

                <input
                    type="text"
                    name="author"
                    placeholder="Author Post"
                    onChange={this.handleChange}
                    value= {this.state.author}
                />

                <input
                    type="text"
                    name="place"
                    placeholder="Place Post"
                    onChange={this.handleChange}
                    value= {this.state.place}
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Description Post"
                    onChange={this.handleChange}
                    value= {this.state.description}
                />

                <input
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags Post"
                    onChange={this.handleChange}
                    value= {this.state.hashtags}
                />

                <button type="submit"> Enviar </button>

            </form>
        )
    }
}

export default New;