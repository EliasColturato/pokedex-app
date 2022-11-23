import React, { useState, useEffect } from 'react';
import ListPokemon from '../list-pokemon';
import { Wrapper, Content, WrapperInput } from './styleHeader';
import { Link } from 'react-router-dom';

import PokemonColor from '../pokemon-color';
import api from '../../services/api';

type ImageType = {
  pathImg: string;
};

type PokemonColorsProps = {
  name: string;
  pokemonColors: any;
};

const Header: React.FC<ImageType> = ({ pathImg }) => {
  const [pokemonColors, setPokemonColors] = useState<PokemonColorsProps[]>([]);

  useEffect(() => {
    async function pokemonColor() {
      const response = await api.get('pokemon-color/');
      setPokemonColors(response.data.results);
    }
    pokemonColor();
  }, []);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={pathImg} alt="LogoPokedex" />
        </Link>
        <WrapperInput>
          <ListPokemon />
        </WrapperInput>
      </Content>
    </Wrapper>
  );
};

export default Header;
