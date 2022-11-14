import styled from 'styled-components';

export const Wrapper = styled.div`
  user-select: none;
  margin: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    width: 200px;
  }
  input {
    border: 1px solid #aaa;
    width: 200px;
    height: 30px;
    border-radius: 2rem;
    padding: 0 1rem;
  }
`;
