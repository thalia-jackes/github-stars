import React from 'react';
import './style.css'

function Bio (){
  return(
  <div className="bloco-bio">
    <div className="container">
      <div className="card">
        <img className="avatar" src="/img/avatar.svg"/>
        <h2> Thalia Jackes </h2>
        <div className="info-bio">
        <h3>Bio</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.­</p>
        </div>

        <div className="info-gerais">
          <h3>Informações Gerais</h3>
        
          <div className="email linha">
            <img src="/img/email.svg"/>
            <p>pedrohemorais@gmail.com</p>
          </div>
          <div className="logo-info linha">
            <img src="/img/logo-info.svg"/>
            <p>Github.com/Pedromorais</p>
          </div>
          <div className="localizacao linha"> 
            <img src="/img/localizacao.svg"/>
            <p>Osasco - SP</p>
          </div>
        </div>
      </div>
    </div>
  </div>

)}; 

  



export default Bio;