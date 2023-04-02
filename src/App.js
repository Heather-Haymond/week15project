import React, { useState, useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
//call api and waits for response in json
  useEffect(() => {
    fetch('https://642725c4161067a83bf6687e.mockapi.io/FavPoke')
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Favorite Pokemon</h1>
      <ul>
        {pokemon.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong>
            <ul>
              {p.moves.map(move => (
                <li key={move}>{move}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
