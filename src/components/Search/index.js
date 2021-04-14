import React from 'react';
import './style.css';

function Search(props) {
  console.log(props)
  const funcaoBuscar = props.funcaoBuscar
  return (
    <div className="search-container">
      <div className="container">
        <img className="image-bg" src="/img/content.svg"/>
        <h1>
          Buscar usuário
        </h1>
        <div className="searchField">
          <button class="submitBtn" onClick={() => funcaoBuscar(document.getElementById('searchField').value)}>
            <img src="/img/lupa.svg" />
          </button>
          <input id="searchField" value="thalia-jackes" type="text" placeholder="Usuário do github..." />
        </div>
      </div>
    </div>
  );
}

export default Search;
