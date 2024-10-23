import React, { useEffect, useState } from 'react';
import './estilo.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results)) // Update to use data.results
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='container'>
      <header>
        <strong className='titulo'>Rick and Morty Characters</strong>
      </header>
      {characters.map((character) => {
        return (
          <article key={character.id} className='post'>
            <strong className='titulo'>{character.name}</strong>
            <p className='subtitulo'>Status: {character.status}</p>
            <p className='subtitulo'>Species: {character.species}</p>
            <p className='subtitulo'>Type: {character.type || 'N/A'}</p>
            <p className='subtitulo'>Gender: {character.gender}</p>
            <p className='subtitulo'>Origin: {character.origin.name}</p>
            <img src={character.image} alt={character.name} className='character-image' />
          </article>
        );
      })}
    </div>
  );
}

export default App;