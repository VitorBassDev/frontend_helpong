import React from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import Login from './pages/Login'
import LoginOng from './pages/Login/LoginOng'
import LoginDoador from './pages/Login/LoginDoador'

import Registro from './pages/Registro'
import RegistroOng from './pages/Registro/RegistroOng'
import RegistroDoador from './pages/Registro/RegistroDoador'

import BuscaNecessidade from './pages/Necessidade/'
import CadastroNecessidade from './pages/Necessidade/cadastro'

import PerfilOng from './pages/Perfil/'




export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact           component={Home}/>  

        <Route path="/login"            component={Login}/>  
        <Route path="/loginOng"         component={LoginOng}/>  
        <Route path="/loginDoador"      component={LoginDoador}/>  

        <Route path="/registro"         component={Registro} />  
        <Route path="/registroOng"      component={RegistroOng}/>  
        <Route path="/registroDoador"   component={RegistroDoador}/>  
        
        
        <Route path="/cadastraNecessidade"   component={CadastroNecessidade}/>  
        <Route path="/buscaNecessidade"   component={BuscaNecessidade}/>  
        
        <Route path="/perfilOng"   component={PerfilOng}/>  
      </Switch>
    </BrowserRouter>
  );
}
