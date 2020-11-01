import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';

import InputStartPages  from '../../componentes/InputStartPages';
import BannerStartPages from '../../componentes/BannerStartPages';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css'
import swal from 'sweetalert'

import api from '../../services/api';

function LoginDoador() {

  const [email, setEmail] = useState('');
  const [senha_usuario, setPassword] = useState();

  const history = useHistory(); 

  async function handleLogin(e){
    e.preventDefault();
    try{
      const resposta = await api.post('autenticacao/authDoador', {email, senha_usuario} );
      
      console.log(resposta.data.usuario.nome);
      
      swal({
        title: "Perfil Verificado!",
        text: "Usuário logado com Sucesso!",
        icon: "success",
        button: "Ok!",
      });      
      //alert(`Usuario Logado: ${resposta.data.usuario.nome}`);
      localStorage.setItem('ongId',  resposta.data.usuario.id_usuario);      
      localStorage.setItem('ongNome',  resposta.data.usuario.nome);      
      localStorage.setItem('ongCpf',  resposta.data.usuario.cpf);      
      localStorage.setItem('ongToken',  resposta.data.token);        
      
      await history.push('/necessidades')
      
    } catch (err) {
      swal({
        title: "Algo deu errado !",
        text: " Veriique Suas Credenciais !",
        icon: "warning",
        button: "Tentar Novamente !",
      });
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
            
            <h1>Doador </h1>
            <div className="login-ong">
              <form onSubmit={handleLogin}>
              <InputStartPages
                  name="email"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) =>  setEmail(e.target.value) }
                  
                />

                <InputStartPages
                  name="password"
                  type="password"
                  label="Senha"
                  value={senha_usuario}
                  onChange={(e) =>  setPassword(e.target.value) }
                />

                <button type="submit">Entrar</button>
              </form>
            </div>
            <div className="register-link">
              Não tem conta? {' '}
              <Link to="/RegistroOng">Cadastre-se!</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
export default LoginDoador;