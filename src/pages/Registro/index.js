import React from 'react';
import { Link } from 'react-router-dom';

import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/study.svg';

import BannerStartPages from '../../componentes/BannerStartPages';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css'

function Register() {

  return(
    <div id="register-page" >
      <div className="register-left">
        <div className="content">
        <Link to="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>    
        <h1>Cadastro</h1>

        <p> Registre-se para ajudar ou ser ajudado</p>
        <div className="login-option">
          <div className="buttons-container">
            
            <Link to="/registroOng" className="study">
              <img src={studyIcon} alt="Estudar"/>
                ONG
            </Link>
                  
            <Link to="/registroDoador" className="teach">
              <img src={teachIcon} alt="Ensinar"/>
                Doador
            </Link>
          </div> 
        </div>
        </div>      
      </div>    

      <div className="register-right">
        <BannerStartPages />
      </div>
    </div>   
  )
}

export default Register;