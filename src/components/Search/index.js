import React from 'react';
import './style.css';

function Search(props) {
  const funcaoBuscar = props.funcaoBuscar
  return (
    <div className="search-container">
      <div className="container">
        <img className="image-bg" src="/img/content.svg"/>
        <h1>
          Buscar usuário
        </h1>
        <div className="searchField">
          <button className="submitBtn" onClick={() => funcaoBuscar(document.getElementById('searchField').value)}>
            <img src="/img/lupa.svg" />
          </button>
          <input id="searchField" defaultValue="thalia-jackes" type="text" placeholder="Usuário do github..." />
        </div>
      </div>
    </div>
  );
}

export default Search;
