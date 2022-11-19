import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const WrapperNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  padding: 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  height: 60px;
  width: 85%;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: ${colors.backgroundNav};
  user-select: none;
`;

export const PreviousBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    opacity: 0;
    transition: all 0.3s;
    transform: translateX(20px);
  }
  &:hover svg {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const NextBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    opacity: 0;
    transition: all 0.3s;
    transform: translateX(-20px);
  }
  &:hover svg {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const FilterBtn = styled.div`
  display: center;
  align-items: center;
`;

export const ItemPerPageBtn = styled.div`
  position: relative;
  font-family: Arial;
  select {
    background: none;
    color: ${colors.white};
    border: 1px solid ${colors.white};
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  select:focus {
    outline: none;
  }
  option {
    color: ${colors.white};
    border-radius: 1rem;
    font-weight: bold;
    background: ${colors.backgroundNav};
  }
`;
