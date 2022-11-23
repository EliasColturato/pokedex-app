import React, { useState, useEffect } from 'react';
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

import PokemonColor from '../pokemon-color';
import api from '../../services/api';

interface NavBarProps {
  page: number;
  nextPage: () => any;
  previousPage: () => any;
  maxPokemon: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

interface PokemonColorProps {
  name: string;
}

const NavBar: React.FC<NavBarProps> = ({
  nextPage,
  previousPage,
  page,
  setItemsPerPage,
  maxPokemon,
}) => {
  const [numberPage, setNumberPage] = useState(1);
  const [pokemonColor, setPokemonColor] = useState<PokemonColorProps[]>([]);
  const [filterCheck, setFilterCheck] = useState(false);

  useEffect(() => {
    async function listColors() {
      const response = await api.get('pokemon-color');
      setPokemonColor(response.data.results);
      console.log(response.data.results);
    }
    listColors();
  }, []);

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
        <FilterBtn onClick={() => setFilterCheck(!filterCheck)}>
          <FilterCircleOutline
            color={'#00000'}
            title={''}
            height="30px"
            width="30px"
          />
        </FilterBtn>
        <PokemonColor pokemonColor={pokemonColor} filterCheck={filterCheck} />
      </Content>
    </WrapperNavBar>
  );
};

export default NavBar;
