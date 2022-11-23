import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Pokemon, { PokemonProps } from '../../components/pokemon';
import { PokemonsWrapper, Wrapper } from './styleHome';

import NavBar from '../../components/navbar/index';

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [maxPokemon, setMaxPokemon] = useState(0);
  useEffect(() => {
    async function listPokemons() {
      const response = await api.get(
        `pokemon/?offset=${page}&limit=${itemsPerPage}`
      );
      setPokemons(response.data.results);
      setMaxPokemon(response.data.count / itemsPerPage);
    }
    listPokemons();
  }, [page, itemsPerPage]);
  function nextPage() {
    setPage(page + itemsPerPage);
  }
  function previousPage() {
    setPage(page - itemsPerPage);
  }
  return (
    <Wrapper>
      <NavBar
        nextPage={nextPage}
        previousPage={previousPage}
        page={page}
        setItemsPerPage={setItemsPerPage}
        maxPokemon={maxPokemon}
      />
      <PokemonsWrapper>
        {pokemons &&
          pokemons.map((item, index) => {
            return (
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
