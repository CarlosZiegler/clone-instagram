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
                {/* Percorre o State Feed do retorno da API, como o foreach*/}
                
                { this.state.feed.map(post =>(
                    
                    <article key={post._id} >
                    <header>
                        <div className="user-info">
                            <span>{post.author}</span>
                            <span className="place"> {post.place} </span>
                        </div>
                        <img src={more} alt="Mais"></img>
                    </header>
                    <img src={`http://localhost:3333/files/${post.image}`} alt="Mais"/>
                    <footer>
                        <div className="actions">
                            <img src={like} alt="Like"></img>
                            <img src={comment} alt="Like"></img>
                            <img src={send} alt="Like"></img>
                        </div>
                        <strong>{post.likes} curtidas</strong>
                        <p>{post.description}
                            <span>{post.hashtags}</span>
                        </p>
                    </footer>
                </article>

                ))}
                
            </section>

            
             
        );

    }
}

export default Feed;