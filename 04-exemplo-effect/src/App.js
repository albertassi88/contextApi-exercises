import React, { useEffect, useState } from 'react';

function App() {
  const [ pokemons, setPokemons ] = useState([]);
  const [ limit, setLimite ] = useState(10);
  const api = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=200`;

  //componentDidMount
  useEffect( async () => {
    const { results } = await fetch(api)
      .then((response) => response.json());
      setPokemons(results);
  }, [limit]) //componentDidUpdate

  const handleButton = () => {
    setLimite( limit + 10 );
  }
  
  return (
    <div>
      <button onClick={ handleButton }>Alterar</button>
      <ul>
        {
          pokemons.map(item => <li key={item.name}>{item.name}</li>)
        }
      </ul>      
    </div>
  );
}

export default App;
