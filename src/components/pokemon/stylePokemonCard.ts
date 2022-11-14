import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  border: 1px solid #aaa;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  img {
    max-width: 30%;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 0.5rem;
    background-color: purple;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    transition: all 0.3s;
  }
  a:hover {
    border: 1px solid purple;
    background: none;
    color: purple;
  }
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
