import React, { useState, useEffect } from 'react';
import { PokemonTypesProp } from '../pokemon/Pokemon';
import { Wrapper } from './PokemonType.style';
import PokemonType from './pokemon-type/';

type TypePokemon = {
  pokemonType: PokemonTypesProp[];
};

const PokemonsType: React.FC<TypePokemon> = ({ pokemonType }) => {
  const [background, setBackground] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    console.log(pokemonType);
  }, []);

  return (
    <Wrapper>
      {pokemonType &&
        pokemonType.map(item => {
          return <PokemonType type={item.type.name} />;
        })}
    </Wrapper>
  );
};

export default PokemonsType;
