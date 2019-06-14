import  React, {Component}  from "react";

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
        
        this.setState({ [e.target.name]: e.target.value });

    }

    //pega salva a imagem, que vem de um array
    handleImageChange = e =>{
        
        this.setState({ image: e.target.files[0] });

    }

    //metodo render do React
    render(){
        return(
            <form id="new-post">
                <input type="file"/>

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