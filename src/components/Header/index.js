import React from 'react';
import './style.css'

function Header(props) {
  return (
    <header className="menu-bg">
      <div className="container">
        <div className="logo"> 
          <img alt="logo" src="/img/logo.svg" />
        </div>
        <div className="title">
          <span>GitHub </span>
          <strong>Stars</strong>
        </div>
      </div>
    </header>
  );
}


export default Header;
