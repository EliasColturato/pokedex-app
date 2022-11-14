import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Pokemon, { PokemonProps } from '../../components/pokemon';

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  useEffect(() => {
    async function listPokemons() {
      const response = await api.get('pokemon/?offset=0&limit=30');
      setPokemons(response.data.results);
    }
    listPokemons();
  }, []);
  return (
    <>
      <div>
        <h1>Pokedex</h1>
        {pokemons &&
          pokemons.map((item, index) => {
            return (
              //estilizar component pai
              <div key={index}>
                <Pokemon name={item.name} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
