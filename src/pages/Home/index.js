import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing_02.svg';

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
            <h2>Plataforma Interativa</h2>
        </div>
        
        <img 
          src={landingImg} 
          alt="Plataforma Interativa"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/buscaNecessidade" className="study">
            <img src={studyIcon} alt="Estudar"/>
              Ajudar
          </Link>

          <Link to="/cadastraNecessidade" className="teach">
            <img src={teachIcon} alt="Ensinar"/>
              Pedir Ajuda
          </Link>
        </div>
      </div>
    </div>
  )
}