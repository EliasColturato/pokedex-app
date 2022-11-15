import React, { useState } from 'react';
import {
  WrapperNavBar,
  Content,
  PreviousBtn,
  NextBtn,
  FilterBtn,
  ItemPerPageBtn,
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
  maxPokemon: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const NavBar: React.FC<NavBarProps> = ({
  nextPage,
  previousPage,
  page,
  setItemsPerPage,
  maxPokemon,
}) => {
  const [numberPage, setNumberPage] = useState(1);
  console.log(numberPage, maxPokemon);

  return (
    <WrapperNavBar>
      <Content>
        <ItemPerPageBtn>
          <select
            name=""
            id=""
            onChange={e => setItemsPerPage(parseInt(e.target.value))}
          >
            <option value={30}>30</option>
            <option value={60}>60</option>
            <option value={90}>90</option>
          </select>
        </ItemPerPageBtn>
        {page > 0 && (
          <PreviousBtn
            onClick={() => {
              previousPage();
              setNumberPage(numberPage - 1);
            }}
          >
            <AiOutlineArrowLeft size={16} />
            Anterior
          </PreviousBtn>
        )}
        {numberPage < maxPokemon && (
          <NextBtn
            onClick={() => {
              nextPage();
              setNumberPage(numberPage + 1);
            }}
          >
            Próxima
            <AiOutlineArrowRight size={16} />
          </NextBtn>
        )}
        <FilterBtn>
          Filtrar:
          <AiOutlineFilter size={16} />
        </FilterBtn>
      </Content>
    </WrapperNavBar>
  );
};

export default NavBar;
