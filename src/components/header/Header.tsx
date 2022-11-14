import React from 'react';
import { Wrapper } from './styleHeader';

const Header = () => {
  return (
    <Wrapper>
      <img src="./img/logo.svg" alt="" />
      <input type="text" placeholder="Qual pokemon quer descobrir?" />
    </Wrapper>
  );
};

export default Header;
