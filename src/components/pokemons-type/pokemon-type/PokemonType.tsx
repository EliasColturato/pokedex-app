import React from 'react';
import { setColor } from './PokemonTypes.constants';
import { WrapperType } from './PokemonType.style';

export interface TypeProp {
  type: string;
}

const PokemonType: React.FC<TypeProp> = ({ type }) => {
  return (
    <WrapperType borderColor={setColor(type)}>
      <p>{type}</p>
    </WrapperType>
  );
};

export default PokemonType;
