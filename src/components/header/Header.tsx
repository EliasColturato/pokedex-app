import React from 'react';
import ListPokemon from '../list-pokemon';
import { Wrapper, Content, WrapperInput } from './styleHeader';
import { Link } from 'react-router-dom';

type ImageType = {
  pathImg: string;
};

const Header: React.FC<ImageType> = ({ pathImg }) => {
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
