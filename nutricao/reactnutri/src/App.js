import React, { useEffect, useState } from 'react';
import './estilo.css';

function App() {
  const [calorias, setCalorias] = useState([]);

  useEffect(() => {
    let url = 'https://caloriasporalimentoapi.herokuapp.com/api/calorias/?descricao=Frango';

    fetch(url)
      .then((dados) => dados.json())
      .then((json) => setCalorias(json))
      .catch((erro) => console.error('Erro ao buscar dados da API:', erro));
  }, []);

  return (
    <div className='container'>
      <header>
        <strong>React Calorias</strong>
      </header>

      {calorias.length > 0 ? (
        calorias.map((item, index) => (
          <article key={index} className='post'>
            <strong className='titulo'>{item.descricao}</strong>
            <p className='subtitulo'>Quantidade: {item.quantidade}</p>
            <p className='subtitulo'>Calorias: {item.calorias}</p>
          </article>
        ))
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
}

export default App;