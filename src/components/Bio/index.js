import React, { useState } from 'react';
import './style.css'

function Bio (props) {
  const userInfo = props.userInfo;
  if (!userInfo) {
    return (null)
  }


  return( 
  <div className="bloco-bio">
    <div className="container">
      <div className="card">
        <img className="avatar" src={userInfo.avatar_url}/>
        <h2>{userInfo.login}</h2>
        {userInfo.bio && <div className="info-bio">
          <h3>Bio</h3>
          <p>{userInfo.bio}</p>
        </div>}

        <div className="info-gerais">
          <h3>Informações Gerais</h3>
        
          {userInfo.email && <div className="email linha">
            <img src="/img/email.svg"/>
            <p>{userInfo.email}</p>
          </div>}
          <div className="logo-info linha">
            <img src="/img/logo-info.svg"/>
            <p>{userInfo.html_url}</p>
          </div>
          {userInfo.location && <div className="localizacao linha"> 
            <img src="/img/localizacao.svg"/>
            <p>{userInfo.location}</p>
          </div>}
        </div>
      </div>
    </div>
  </div>
)}; 

  



export default Bio;