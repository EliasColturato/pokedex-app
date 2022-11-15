import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Wrapper = styled.div`
  background-color: ${colors.backgroundColor};
`;

export const PokemonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 2rem;
  row-gap: 2rem;
`;
