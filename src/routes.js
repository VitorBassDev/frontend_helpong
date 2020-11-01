import React from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import Login from './pages/Login'
import AuthOng from './pages/Login/AuthOng'
import AuthDoador from './pages/Login/AuthDoador'

import Registro from './pages/Registro'
import RegistroOng from './pages/Registro/RegistroOng'
import RegistroDoador from './pages/Registro/RegistroDoador'

import todasNecessidades from './pages/Necessidade/'
import RegistroNecessidade from './pages/Necessidade/RegistroNecessidade'

import PerfilOng from './pages/Perfil/index02'




export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact           component={Home}/>  

        <Route path="/login"            component={Login}/>  
        <Route path="/authOng"          component={AuthOng}/>  
        <Route path="/authDoador"       component={AuthDoador}/>  

        <Route path="/registro"         component={Registro} />  
        <Route path="/registroOng"      component={RegistroOng}/>  
        <Route path="/registroDoador"   component={RegistroDoador}/>  
        
        
        <Route path="/registroNecessidade"   component={RegistroNecessidade}/>  
        <Route path="/necessidades"     component={todasNecessidades}/>  
        
        <Route path="/perfilOng"        component={PerfilOng}/>  
      </Switch>
    </BrowserRouter>
  );
}
