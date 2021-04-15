import React, { useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import Bio from './components/Bio';


function App() {
  const [resultados, mudarResultados] = useState(null)

  var getStared = async (user) => {
    // const result = await fetch(`https://api.github.com/users/${user}/starred`)
    const results = await fetch(`https://api.github.com/users/${user}/starred`)
      .then((res) => res.json())
      .then((starred) => starred.map((s) => ({
          owner:       s.owner,
          repo:        s.name,
          description: s.description,
          url: s.url, 
          avatar:s.owner.avatar_url,
          login:s.owner.login
      })));
      mudarResultados(results)
  }

  return (
    <div className="App">
      <Header/>
      <Search funcaoBuscar={getStared}/>
      <Bio/>
      <Results resultados={resultados} />
      {/* <button onClick={() => getStared()}>clica</button> */}
    </div>
  );

  
}

export default App;
