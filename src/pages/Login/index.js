import React  from 'react';
import { Link } from 'react-router-dom';
import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/study.svg';
import BannerStartPages from '../../componentes/BannerStartPages';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css'

function Login() {


  function handleLogin() {
    console.log("login")
  }
    return(
      <div id="register-page" >
        <div className="register-right">
          <BannerStartPages />
        </div>    

        <div className="register-left">
          <div className="content">
            <Link to="/">
              <img src={backIcon} alt="Voltar"/>
            </Link>    
            
            <h1>Escolher Perfil</h1>

            <div className="login-option">
              <form onSubmit={handleLogin}>
                <div className="buttons-container">
                  <Link to="/loginOng" className="study">
                    <img src={studyIcon} alt="Estudar"/>
                    ONG
                  </Link>
                  
                  <Link to="/loginDoador" className="teach">
                    <img src={teachIcon} alt="Ensinar"/>
                    Doador
                  </Link>
                </div>
              </form>
            </div>
            
            <div className="register-link">
              Não tem conta? {' '}
              <Link to="/register">Cadastre-se!</Link>
            </div>

        </div>
      </div>
    </div>
  )
}
export default Login;