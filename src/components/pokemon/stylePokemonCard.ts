import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  border: 1px solid #aaa;
  border-radius: 1rem;
  padding: 5px 15px 15px 15px;
  width: 250px;
  height: 300px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
`;

export const PokemonName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  text-transform: capitalize;
  p {
    opacity: 0.35;
  }
`;

export const PokemonImage = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 150px;
    height: 150px;
  }
`;
