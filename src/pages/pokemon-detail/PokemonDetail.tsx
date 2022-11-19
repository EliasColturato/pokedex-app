import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonTypesProp } from '../../components/pokemon/Pokemon';
import PokemonsType from '../../components/pokemons-type';
import api from '../../services/api';
import {
  Wrapper,
  ImageWrapper,
  PokemonTexto,
  PokemonDetails,
  Title,
  Atributes,
} from './PokemonDetail.style';
import { PokemonDetailProps } from './PokemonDetail.type';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemonType, setPokemonType] = useState<PokemonTypesProp[]>([]);
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailProps | null>(
    null
  );
  const [pokemonImage, setPokemonImage] = useState('');
  useEffect(() => {
    async function PokemonDetail() {
      const response = await api.get(`pokemon/${name}`);
      setPokemonDetail(response.data);
      let dreamWorldSprite =
        response.data.sprites.other.dream_world.front_default;
      setPokemonImage(
        dreamWorldSprite
          ? dreamWorldSprite
          : response.data.sprites.front_default
      );
      setPokemonType(response.data.types);
    }
    PokemonDetail();
  }, [name]);

  return (
    <Wrapper>
      {pokemonDetail && (
        <PokemonDetails>
          <ImageWrapper>
            <img src={pokemonImage} alt="" />
          </ImageWrapper>
          <PokemonTexto>
            <Title>
              <h1>{pokemonDetail.name}</h1>
              <p>#{('000' + pokemonDetail.id).slice(-3)}</p>
            </Title>
            <Atributes>
              <p>Weight:</p>
              <h1>{pokemonDetail.weight}kg</h1>
            </Atributes>
            <PokemonsType pokemonType={pokemonType} />
          </PokemonTexto>
        </PokemonDetails>
      )}
    </Wrapper>
  );
};

export default PokemonDetail;
