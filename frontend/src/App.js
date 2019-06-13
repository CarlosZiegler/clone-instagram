import React from 'react';
//importando os estilos CSS
import './global.css';

//Importando o Header
import Header from'./components/Header';


import { BrowserRouter} from 'react-router-dom';

//importando as rotas
import Routes from './routes';


// componente APP em JSX retorna um html em forma de funcao ou classe que pode conter Codigo de HTML, CSS e Javascript
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
      
  );
}

export default App;


