import React from 'react';
import './style.css';

function Results(props) {
  console.log('props', props)
  const resultados = props.resultados;
  if(!resultados) return null

  return (
    <div className="results-container">
      <div className="container">
        {resultados.map((resultado) => {

          return (
            <div className="bloco-resultado">
              <img className="star" src="/img/star.svg"></img>
              <h3>{resultado.repo}</h3>
              <p className="description">{resultado.description}</p>
              <p>Criado por <a href={'https://github.com/' + resultado.login}>{resultado.login}</a></p>
            </div>
          )
            
        })}
      </div>
    </div>
  );
}

export default Results;
