import React from 'react';
import { Link } from 'react-router-dom';

//import logo from '../../assets/images/logo.svg';
import logo from '../../assets/novasImg/Logo-branco.svg';
//import landingImg from '../../assets/images/landing_02.svg';
import landingImg from '../../assets/novasImg/Img.png'

import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/study.svg';

import './styles.css';

export default function Home() {
  
  return (
    <div id="page-landing">
      <header>
        <div className="user-options">
          <Link to="/login" className="option-login">Login</Link>        
          <Link to="/registro" className="option-register">Cadastro</Link>        
        </div>
      </header>

      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img  src={logo} alt="logo"/>
           
        </div>
        
        <img 
          src={landingImg} 
          alt="Plataforma Interativa"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/necessidades" className="study">
            <img src={studyIcon} alt="Estudar"/>
              Ajudar
          </Link>

          <Link to="/registroNecessidade" className="teach">
            <img src={teachIcon} alt="Ensinar"/>
              Pedir Ajuda
          </Link>
        </div>
      </div>
    </div>
  )
}