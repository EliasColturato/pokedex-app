import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import ListPokemonItem from './list-pokemon-item';
import { WrapperItem } from './ListPokemon.style';

interface PokemonsListProps {
  name: string;
  url: string;
}

const ListPokemon = () => {
  const [searchPokemon, setSearchPokemon] = useState('');
  const [listPokemon, setListPokemon] = useState<PokemonsListProps[]>([]);
  useEffect(() => {
    async function pokemonList() {
      const response = await api.get('pokemon/?offset=0&limit=1154');
      setListPokemon(response.data.results);
    }
    pokemonList();
  }, []);
  const filterPokemon = listPokemon
    .filter(({ name }) => name.startsWith(searchPokemon))
    .slice(0, 30);

  return (
    <>
      <input
        type="text"
        placeholder="Qual pokemon quer descobrir?"
        onChange={e => setSearchPokemon(e.target.value.toLowerCase())}
      />
      {searchPokemon !== '' && (
        <WrapperItem
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {filterPokemon &&
            filterPokemon.map(item => {
              return (
                <Link to={`/pokemon/${item.name}`} key={item.name}>
                  <ListPokemonItem name={item.name} />;
                </Link>
              );
            })}
        </WrapperItem>
      )}
    </>
  );
};

export default ListPokemon;
