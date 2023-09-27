import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BG_800};
  font-weight: 500;
  border-radius: 1rem;
  border: 0;

  padding: 0 1.6rem;
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
  }
`
