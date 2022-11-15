import React, { useEffect, useState } from 'react';
import { PokemonProps } from './Pokemon.types';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Wrapper, PokemonName, PokemonImage } from './stylePokemonCard';

import PokemonsType from '../pokemons-type/index';

interface PokemonTypeProp {
  name: string;
  url: string;
  id: number;
}

export interface PokemonTypesProp {
  type: PokemonTypeProp;
}

const Pokemon: React.FC<PokemonProps> = ({ name }) => {
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonType, setPokemonType] = useState<PokemonTypesProp[]>([]);
  const [pokemonId, setPokemonId] = useState(0);
  useEffect(() => {
    async function selectPokemon() {
      const response = await api.get(`pokemon/${name}`);
      setPokemonImage(response.data.sprites.other.dream_world.front_default);
      setPokemonType(response.data.types);
      setPokemonId(response.data.id);
    }
    selectPokemon();
  });

  return (
    <>
      <Link to={`/pokemon/${name}`} style={{ textDecoration: 'none' }}>
        <Wrapper>
          <PokemonName>
            <h1>{name}</h1>
            <p>#{('000' + pokemonId).slice(-3)}</p>
          </PokemonName>
          <PokemonImage>
            <img src={`${pokemonImage}`} alt="" />
          </PokemonImage>
          <PokemonsType pokemonType={pokemonType} />
        </Wrapper>
      </Link>
    </>
  );
};

export default Pokemon;
