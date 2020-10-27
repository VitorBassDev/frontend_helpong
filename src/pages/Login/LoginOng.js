import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';

import InputStartPages  from '../../componentes/InputStartPages/';
import BannerStartPages from '../../componentes/BannerStartPages';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css'

import api from '../../services/api';

function LoginOng() {

  const [cpf, setCpf] = useState('');
  const history = useHistory(); 

  async function handleLogin(e){
    e.preventDefault();

    try{
      const resposta = await api.post('profile/ong', {cpf} );
      //console.log(resposta.data.nome);
      alert(`Usuario Logado: ${resposta.data.nome}`);
      localStorage.setItem('ongCpf',  cpf);
      localStorage.setItem('ongNome', resposta.data.nome);
      localStorage.setItem('ongId',   resposta.data.id_usuario);

      //alert(`Nome: ${resposta.data.nome}`)
      history.push('/perfilOng')
      
    } catch (err) {
        alert('Falha no Login, tente novamente');
    }
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
            
            <h1>Fazer login - ONG </h1>
            <div className="login-ong">
              <form onSubmit={handleLogin}>
                <InputStartPages
                  placeholder="Seu CPF"
                  value={cpf}
                  onChange={e => setCpf(e.target.value)}
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
export default LoginOng;