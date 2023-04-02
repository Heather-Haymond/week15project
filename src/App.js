import React, { useState, useEffect } from 'react';

function App() { 
  const [pokemon, setPokemon] = useState([]); //creates list of poke
  const [name, setName] = useState(''); // used for add logic
  //call api and waits for response in json
  useEffect(() => { //fetches from Mock API endpoint
    fetch('https://642725c4161067a83bf6687e.mockapi.io/FavPoke')
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error(error));
  }, []);
// function to delete 
  const handleDelete = id => {
    setPokemon(prevPokemon => prevPokemon.filter(p => p.id !== id));
  };
  //function that adds btn
  const handleSubmit = e => {
    e.preventDefault();
    const newPokemon = {
      name: name
    };
    //spread operater to st values of poke
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
        {pokemon.map(p => ( //iterates
          <li key={p.id}>
            {/* creates name for object in list */}
            <strong>{p.name}</strong> 
            {/* creates delete btn for objects in list */}
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




