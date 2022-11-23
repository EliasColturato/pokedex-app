import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const ColorWrapper = styled.div<{ filterCheck: boolean }>`
  position: absolute;
  display: ${({ filterCheck }) => (filterCheck ? 'block' : 'none')};
  cursor: pointer;
  text-transform: capitalize;
  top: 90px;
  width: 130px;
  height: 300px;
  z-index: 99;
  right: 8.5%;
  border: 1px solid ${colors.white};
  border-radius: 0.7rem;
  background-color: ${colors.backgroundNav};
  overflow-y: scroll;
`;

export const ColorTitle = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  h3 {
    padding: 0.5rem;
  }
  h3:hover {
    background-color: ${colors.backgroundColor};
  }
`;
