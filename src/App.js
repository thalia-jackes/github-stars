import React, { useState} from 'react'
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import Bio from './components/Bio';


function App() {
  const [resultados, mudarResultados] = useState(null)
  const [userInfo, mudarUserInfo] = useState(null)

  var getStared = async (user) => {
    const results = await fetch(`https://api.github.com/users/${user}/starred`)
      .then((res) => res.json())
      .then((starred) => {
        if (!starred || starred.message) {
          return null;
        }
        return starred.map((s) => ({
          owner:       s.owner,
          repo:        s.name,
          description: s.description,
          url: s.url, 
          avatar:s.owner.avatar_url,
          login:s.owner.login
        }));
      });
      mudarResultados(results)

      const resultsInfo = await fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      
      mudarUserInfo(resultsInfo)

  }


  return (
    <div className="App">
      <Header/>
      <Search funcaoBuscar={getStared}/>
      <Bio userInfo={userInfo}/>
      <Results resultados={resultados} />
    </div>
  );

  
}

export default App;
