import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Wrapper = styled.div`
  display: flex;
  text-transform: capitalize;
  justify-content: center;
  background-color: ${colors.backgroundColor};
`;

export const PokemonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Atributes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.white};
  h1 {
    text-transform: lowercase;
  }
`;

export const PokemonHabilities = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  text-align: left;
`;

export const AbilityTitle = styled.div`
  margin: 1rem;
`;

export const AbilityName = styled.div`
  display: flex;
`;
