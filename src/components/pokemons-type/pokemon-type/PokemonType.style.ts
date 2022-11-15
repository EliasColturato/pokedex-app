import styled from 'styled-components';

export const WrapperType = styled.div<{ borderColor?: string }>`
  border: 1px solid ${({ borderColor }) => (borderColor ? borderColor : '#f00')};
  color: ${({ borderColor }) => (borderColor ? borderColor : '#f00')};
  height: 30px;
  width: 60px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 0.5rem;
`;
