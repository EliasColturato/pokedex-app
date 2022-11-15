import React from 'react';
import {
  WrapperNavBar,
  Content,
  PreviousBtn,
  NextBtn,
  FilterBtn,
} from './NavBar.style';
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineFilter,
} from 'react-icons/ai';

interface NavBarProps {
  page: number;
  nextPage: () => any;
  previousPage: () => any;
}

const NavBar: React.FC<NavBarProps> = ({ nextPage, previousPage, page }) => {
  return (
    <WrapperNavBar>
      <Content>
        {page > 0 && (
          <PreviousBtn onClick={previousPage}>
            <AiOutlineArrowLeft size={16} />
            Anterior
          </PreviousBtn>
        )}
        <NextBtn onClick={nextPage}>
          Próxima
          <AiOutlineArrowRight size={16} />
        </NextBtn>
        <FilterBtn>
          Filtrar:
          <AiOutlineFilter size={16} />
        </FilterBtn>
      </Content>
    </WrapperNavBar>
  );
};

export default NavBar;
