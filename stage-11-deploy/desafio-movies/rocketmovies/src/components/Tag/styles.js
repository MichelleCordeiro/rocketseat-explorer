import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.WHITE_200_tags};
  background-color: ${({ theme }) => theme.COLORS.BG_600_header_line};
  
  border-radius: 0.8rem;
  padding: 0.6rem 1.6rem;
`