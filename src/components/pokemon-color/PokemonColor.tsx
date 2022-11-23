import React from 'react';

import { ColorWrapper, ColorTitle } from './PokemonColor.style';

interface PokemonProps {
  name: string;
}

interface ListPokemonProps {
  pokemonColor: PokemonProps[];
  filterCheck: boolean;
}

const PokemonColor: React.FC<ListPokemonProps> = ({
  pokemonColor,
  filterCheck,
}) => {
  return (
    <ColorWrapper filterCheck={filterCheck}>
      {pokemonColor.map(item => {
        return (
          <ColorTitle key={item.name}>
            <h3>{item.name}</h3>
          </ColorTitle>
        );
      })}
    </ColorWrapper>
  );
};

export default PokemonColor;
