import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Wrapper = styled.div`
  display: flex;
  text-transform: capitalize;
  justify-content: center;
  background-color: ${colors.backgroundColor};
  height: calc(100vh - 150px);
`;

export const PokemonDetails = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  color: ${colors.white};
  p {
    color: ${colors.text50};
  }
`;

export const ImageWrapper = styled.div`
  user-select: none;
  img {
    width: 200px;
    height: 200px;
  }
`;

export const PokemonTexto = styled.div``;
