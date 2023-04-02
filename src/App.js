import React, { useState, useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [name, setName] = useState('');
//call api and waits for response in json
  useEffect(() => {
    fetch('https://642725c4161067a83bf6687e.mockapi.io/FavPoke')
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = id => {
    setPokemon(prevPokemon => prevPokemon.filter(p => p.id !== id));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newPokemon = {
      name: name
    };
    setPokemon(prevPokemon => [...prevPokemon, newPokemon]);
    setName('');
  };

  return (
    <div>
      <h1>Favorite Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Add a new Pokemon:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {pokemon.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




