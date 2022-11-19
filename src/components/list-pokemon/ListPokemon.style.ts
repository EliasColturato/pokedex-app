import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const WrapperItem = styled.div`
  position: absolute;
  z-index: 99;
  top: 43px;
  left: 50px;
  overflow-y: scroll;
  height: 300px;
  width: 310px;
  border: 1px solid ${colors.white};
  color: ${colors.white};
  border-radius: 0.3rem;
  background-color: ${colors.backgroundColor};
  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.backgroundNav};
    border-radius: 15px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.white};
  }

  a {
    text-decoration: none;
    color: ${colors.white};
  }
`;
