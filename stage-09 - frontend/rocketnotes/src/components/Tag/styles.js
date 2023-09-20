import styled from 'styled-components'

export const Container = styled.span`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  font-size: 1.2rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1.4rem;
  margin-right: 0.6rem;
`