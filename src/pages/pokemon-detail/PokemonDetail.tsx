import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { Wrapper } from './PokemonDetail.style';
import { PokemonDetailProps } from './PokemonDetail.type';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailProps[]>([]);
  const [pokemonImage, setPokemonImage] = useState('');
  useEffect(() => {
    async function PokemonDetail() {
      const response = await api.get(`pokemon/${name}`);
      setPokemonDetail(response.data);
      setPokemonImage(response.data.sprites.other.dream_world.front_default);
    }
    PokemonDetail();
  }, []);

  return (
    <Wrapper>
      <div>
        <h1>{name}</h1>
        <img src={pokemonImage} alt="" />
        <div id="atributes">
          <p>Weight:</p>
          {pokemonDetail &&
            pokemonDetail.map((item, index) => {
              return (
                <div key={index}>
                  <h1>{item.weight}</h1>
                </div>
              );
            })}
        </div>
      </div>
    </Wrapper>
  );
};

export default PokemonDetail;
