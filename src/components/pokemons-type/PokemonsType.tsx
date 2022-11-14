import React from 'react';
import { PokemonTypesProp } from '../pokemon/Pokemon';
import { Wrapper, PokemonType } from './PokemonType.style';

type TypePokemon = {
  pokemonType: PokemonTypesProp[];
};

const PokemonsType: React.FC<TypePokemon> = ({ pokemonType }) => {
  return (
    <Wrapper>
      {pokemonType &&
        pokemonType.map(item => {
          return (
            <PokemonType>
              <span>{item.type.name}</span>
            </PokemonType>
          );
        })}
    </Wrapper>
  );
};

export default PokemonsType;
