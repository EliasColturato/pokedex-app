import React, { useEffect, useState } from 'react';
import { PokemonProps } from './Pokemon.types';

import api from '../../services/api';
import { Wrapper } from './stylePokemonCard';

const Pokemon: React.FC<PokemonProps> = ({ name }) => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function selectPokemon() {
      const response = api.get(`pokemon/${name}`);
      console.log(response);
    }
    selectPokemon();
    //trazer id, img, name de cada pokemon
    // estilo do card
  }, []);

  return (
    <>
      <Wrapper>
        <h1>{name}</h1>
      </Wrapper>
    </>
  );
};

export default Pokemon;
