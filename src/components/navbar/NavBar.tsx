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
  ArrowForwardCircleOutline,
  ArrowBackCircleOutline,
  FilterCircleOutline,
} from 'react-ionicons';

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
            <ArrowBackCircleOutline
              color={'#00000'}
              title={''}
              height="30px"
              width="30px"
            />
            <p>Página Anterior</p>
          </PreviousBtn>
        )}
        {numberPage < maxPokemon && (
          <NextBtn
            onClick={() => {
              nextPage();
              setNumberPage(numberPage + 1);
            }}
          >
            <p>Próxima Página</p>
            <ArrowForwardCircleOutline
              color={'#00000'}
              title={''}
              height="30px"
              width="30px"
            />
          </NextBtn>
        )}
        <FilterBtn>
          <FilterCircleOutline
            color={'#00000'}
            title={''}
            height="30px"
            width="30px"
          />
        </FilterBtn>
      </Content>
    </WrapperNavBar>
  );
};

export default NavBar;
