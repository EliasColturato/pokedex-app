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
  border-radius: 0.5rem;
  display: flex;
  height: 60px;
  width: 85%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: ${colors.backgroundNav};
  user-select: none;
`;

export const PreviousBtn = styled.div`
  align-items: center;
  display: center;
  cursor: pointer;
`;

export const NextBtn = styled.div`
  align-items: center;
  display: center;
  cursor: pointer;
`;

export const FilterBtn = styled.div`
  align-items: center;
  display: center;
`;
