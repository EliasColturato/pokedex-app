import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Wrapper = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  background-color: ${colors.backgroundColor};
  img {
    width: 200px;
    height: auto;
  }
  input {
    border: 1px solid #aaa;
    width: 200px;
    height: 30px;
    border-radius: 2rem;
    padding: 0 1rem;
    background: none;
    width: 278px;
    height: 40px;
    margin-left: 3rem;
  }
`;

export const Content = styled.div`
  width: 1100px;
  height: 191px;
  display: flex;
  align-items: center;
`;
