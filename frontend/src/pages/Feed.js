import  React, {Component}  from "react";

//importando socket IO para client
import io from 'socket.io-client';

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
        //
        this.resgisterToSocket();
        //realiza uma chamada get na minha api
        const response = await api.get('posts');
        //set o estado com os dados obtidos da requisicao na API
        this.setState({ feed : response.data });
    }

    resgisterToSocket = () =>{
        const socket = io('http://localhost:3333')

        //recebe post da minha API
        socket.on('post', newPost => {
            // seta o estado com o novopost por primeiro e o resto dos post depois
            this.setState({ feed : [newPost, ...this.state.feed ]});
        })

          //recebe like da minha API
          socket.on('like', likedPost => {
            // scompara se o id do post recebido esta no meu feed e altera quantidade de likes
            this.setState({ feed : this.state.feed.map(post =>
                post._id === likedPost._id ? likedPost : post
                )
            });
        })
    }
    // pega o id do post e coloca na api para adicionar um like
    handleLike = id =>{

        api.post(`/posts/${id}/like`);

    };

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
                            {/*Precisa usar arrows function para conseguir passar parametro no JSX */}
                            <button type="button" onClick={() => this.handleLike(post._id)}>
                            <img src={like} alt="Like"></img>
                            </button>
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