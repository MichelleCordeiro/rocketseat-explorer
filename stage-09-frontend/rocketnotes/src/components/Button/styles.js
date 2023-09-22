import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 56px;
  
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  font-weight: 500;
  border-radius: 10px;
  border: 0;

  padding: 0 16px;
  margin-top: 16px;

  &:disabled {
    opacity: 0.5;
  }
`
