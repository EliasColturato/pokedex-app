import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { name } = useParams();
  return <div>PokemonDetail</div>;
};

export default PokemonDetail;
