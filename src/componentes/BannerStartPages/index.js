import React from 'react';

import logo from '../../assets/images/logo.svg';
//import logo from '../../assets/novasImg/logo-mini.svg';
//import landingImg from '../../assets/novasImg/img.svg'

//import landingImg from '../../assets/novasImg/Img-login-png.png'

import './styles.css';
/**
 
 */
function BannerStartPages() {
  return(
    <div className="banner-container">
      <div className="logo-container">
        <img src={logo} alt="logo"/>
        
      </div>
    </div>
  )
}

export default BannerStartPages;