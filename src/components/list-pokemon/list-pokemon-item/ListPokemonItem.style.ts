import styled from 'styled-components';

export const ItemWrapper = styled.div<{ changeWidth: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  transition: all 0.3s;
  text-align: left;
  column-gap: 1rem;
  img {
    width: ${({ changeWidth }) => (changeWidth ? '100px' : '40px')};
    padding: ${({ changeWidth }) => (changeWidth ? '0' : '26px')};
  }
  p {
    text-transform: capitalize;
    width: 150px;
  }
  span {
    text-align: right;
  }
  &:hover {
    background-color: #000;
  }
`;
