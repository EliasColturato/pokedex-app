import React from 'react';
import { Wrapper, Content } from './styleHeader';

type ImageType = {
  pathImg: string;
};

const Header: React.FC<ImageType> = ({ pathImg }) => {
  return (
    <Wrapper>
      <Content>

      <img src={pathImg} alt="LogoPokedex" />
      <input type="text" placeholder="Qual pokemon quer descobrir?" />
      </Content>
    </Wrapper>
  );
};

export default Header;
