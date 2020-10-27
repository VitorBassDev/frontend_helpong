import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import InputStartPages  from '../../componentes/InputStartPages/';
import BannerStartPages from '../../componentes/BannerStartPages';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css'

function LoginDoador() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

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
            
            <h1>Fazer login - Doador </h1>
            <div className="login-doador">
              <form onSubmit={handleLogin}>
                <InputStartPages
                  name="email"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                />

                <InputStartPages
                  name="password"
                  type="password"
                  label="Senha"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                />

                <button type="submit">Entrar</button>
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
export default LoginDoador;