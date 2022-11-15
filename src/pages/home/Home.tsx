import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Pokemon, { PokemonProps } from '../../components/pokemon';
import { PokemonsWrapper, Wrapper } from './styleHome';

import NavBar from '../../components/navbar/index';

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    async function listPokemons() {
      const response = await api.get(`pokemon/?offset=${page}&limit=30`);
      setPokemons(response.data.results);
    }
    listPokemons();
  }, [page]);
  function nextPage() {
    setPage(page + 30);
  }
  function previousPage() {
    setPage(page - 30);
  }
  return (
    <Wrapper>
      <NavBar nextPage={nextPage} previousPage={previousPage} page={page} />
      <PokemonsWrapper>
        {pokemons &&
          pokemons.map((item, index) => {
            return (
              //estilizar component pai
              <div key={index}>
                <Pokemon name={item.name} />
              </div>
            );
          })}
      </PokemonsWrapper>
    </Wrapper>
  );
};

export default Home;
