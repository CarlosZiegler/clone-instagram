import React from 'react';
// componente como se fosse uma ancora do HTML
import { Link } from 'react-router-dom';

//importando meu estilo CSS
import './Header.css';
//importando Logo Instagram
import logo from '../assets/logo.svg';
//importando Camera
import camera from '../assets/camera.svg';

export default function Header() {
  return (
    <header id="main-header">
        <div className="header-content">
            {/*Propriedade to indica qual rota seguir*/}
            <Link to="/">
                <img src= {logo} alt="InstaRocket"/>
            </Link>
            <Link to="/new">
                <img src= {camera} alt="Enviar publicacao"/>
            </Link>
        </div>
    </header>
  );
}
