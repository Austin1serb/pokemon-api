import Post from './components/pokemon';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);


  const getPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(res => { setPokemon(res.data.results.map(pokemon=> pokemon.name));
        console.log(res.data.results.map(pokemon => pokemon.name));
        console.log(pokemon)
      })

      
      .catch(err => {
        console.log(err);
      })
  }


  // useEffect(() => {
  //   getPokemon();
  // }, []);


  return (
    <div className="App">
      <button onClick={getPokemon} >Fetch Pokemon</button>
      <div>
        {pokemon.map((name, index) =>(
          <Post key={index} name={name} />
        ))}
      </div>
    </div>
  );
}

export default App;
