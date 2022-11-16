import React from 'react';
import ListPokemon from '../list-pokemon';
import { Wrapper, Content, WrapperInput } from './styleHeader';

type ImageType = {
  pathImg: string;
};

const Header: React.FC<ImageType> = ({ pathImg }) => {
  return (
    <Wrapper>
      <Content>
        <img src={pathImg} alt="LogoPokedex" />
        <WrapperInput>
          <ListPokemon />
        </WrapperInput>
      </Content>
    </Wrapper>
  );
};

export default Header;
