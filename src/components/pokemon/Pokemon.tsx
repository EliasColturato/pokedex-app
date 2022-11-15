import React, { useEffect, useState } from 'react';
import { PokemonProps } from './Pokemon.types';
import { Link } from 'react-router-dom';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import api from '../../services/api';
import {
  Wrapper,
  PokemonName,
  PokemonImage,
  Loading,
} from './stylePokemonCard';

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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function selectPokemon() {
      const response = await api.get(`pokemon/${name}`);
      let dreamWordlImage =
        response.data.sprites.other.dream_world.front_default;
      setPokemonImage(
        dreamWordlImage ? dreamWordlImage : response.data.sprites.front_default 
      );
      setPokemonType(response.data.types);
      setPokemonId(response.data.id);
    }
    selectPokemon();

    setTimeout(() => {
      setLoading(true);
    }, 1000);
  });

  return (
    <>
      <Link to={`/pokemon/${name}`} style={{ textDecoration: 'none' }}>
        <Wrapper>
          <PokemonName>
            <h1>{name}</h1>
            <p>#{pokemonId > 999 ? ('00000' + pokemonId).slice(-5) : ('000' + pokemonId).slice(-3)}</p>
          </PokemonName>
          {!loading ? (
            <Loading>
              <AiOutlineLoading3Quarters size={80} />
            </Loading>
          ) : (
            <PokemonImage>
              <img src={`${pokemonImage ? pokemonImage : './img/unknowPokemon.png'} `} alt="" />
            </PokemonImage>
          )}
          <PokemonsType pokemonType={pokemonType} />
        </Wrapper>
      </Link>
    </>
  );
};

export default Pokemon;
