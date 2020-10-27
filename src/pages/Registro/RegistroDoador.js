import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';

import InputStartPages from '../../componentes/InputStartPages';
import BannerStartPages from '../../componentes/BannerStartPages';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css'

import api from '../../services/api';

export default function Register() {

  const[nome,   setNome]    = useState('');
  const[email,  setEmail]   = useState('');
  const[senha,  setSenha]   = useState('');
  const[cpf,    setCpf]     = useState('');

  const history = useHistory();

  async function registrarUsuarioOng(e) {
    e.preventDefault();
    //console.log(e)

    const data = {
      nome,
      email,
      cpf,
      senha,
    };

    try {
      const resposta = await api.post('usuario/usuario-doador', data);

        alert(`Seu ID de Acesso: ${resposta.data.cpf}`);
        history.push('/');

    } catch(err){
      alert('Erro no Cadastro, Tente novamente.');
    }
  }
  return(
    <div id="register-page" >
      <div className="register-left">
        <div className="content">
        <Link to="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>    

        <h1>Cadastro - Ong</h1>
          <p>Preencha dos dados abaixo para se tornar uma ONG</p>
          <form onSubmit={registrarUsuarioOng}>
              <InputStartPages
                type="text"
                placeholder="nome"
                label="Nome"
                value={nome}
                onChange={ e => setNome (e.target.value)}
              />
            
              <InputStartPages
                type="email"
                placeholder="Email"
                label="Email"
                value={email}
                onChange={ e => setEmail (e.target.value)}
              />
              
              <InputStartPages
                type="password"
                label="Senha"
                placeholder="senha"
                value={senha}
                onChange={ e => setSenha (e.target.value)}
              />

              <InputStartPages
                type="text"
                placeholder="cpf"
                label="cpf"
                value={cpf}
                onChange={ e => setCpf (e.target.value)}
              />

              <button type="submit">Cadastrar</button>
            </form>
        </div>
            
      </div>    
      <div className="register-right">
        <BannerStartPages />
      </div>
    </div>
        
  )
}
