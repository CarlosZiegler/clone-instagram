import  React, {Component}  from "react";

//importando minha api
import api from '../services/api';

//importando estilos do feed
import './Feed.css';


//Importando logos
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    // cria um estado para o componente
    state = {
        //pripriedade feed comeca vazio
        feed:[],
    };
    //o que vai ser executado no momento que é iniciado o componente
    async componentDidMount(){
        //realiza uma chamada get na minha api
        const response = await api.get('posts');
        //set o estado com os dados obtidos da requisicao na API
        this.setState({ feed : response.data });
    }

    //Metodo para renderizar
    render(){
        return(
            <section id="post-list">
                <article >
                    <header>
                        <div className="user-info">
                            <span>Carlos Ziegler</span>
                            <span className="place"> Berlin </span>
                        </div>
                        <img src={more} alt="Mais"></img>
                    </header>

                    <img src="http://localhost:3333/files/docker.jpg" alt="Mais"></img>
                    <footer>
                        <div className="actions">
                            <img src={like} alt="Like"></img>
                            <img src={comment} alt="Like"></img>
                            <img src={send} alt="Like"></img>
                        </div>
                        <strong>900 curtidas</strong>
                        <p>Um post exemplo
                            <span>#Berlin</span>
                        </p>
                    </footer>
                </article>

                <article >
                    <header>
                        <div className="user-info">
                            <span>Carlos Ziegler</span>
                            <span className="place"> Berlin </span>
                        </div>
                        <img src={more} alt="Mais"></img>
                    </header>

                    <img src="http://localhost:3333/files/docker.jpg" alt="Mais"></img>
                    <footer>
                        <div className="actions">
                            <img src={like} alt="Like"></img>
                            <img src={comment} alt="Like"></img>
                            <img src={send} alt="Like"></img>
                        </div>
                        <strong>900 curtidas</strong>
                        <p>Um post exemplo
                            <span>#Berlin</span>
                        </p>
                    </footer>
                </article>
            </section>

            
             
        )

    }
}

export default Feed;