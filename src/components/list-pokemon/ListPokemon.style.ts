import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const WrapperItem = styled.div`
  position: absolute;
  z-index: 99;
  top: 43px;
  left: 50px;
  overflow-y: scroll;
  height: 300px;
  width: 350px;
  border: 1px solid ${colors.white};
  color: ${colors.white};
  border-radius: 1rem;
  background-color: ${colors.backgroundColor};
  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 1rem;
  }
  overflow-x: hidden;
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
