import styled from 'styled-components'

export const Container = styled.span`
  font-size: 1.6rem;
  padding: 0.6rem 1.6rem;
  border-radius: 0.8rem;
  margin-right: 0.8rem;

  color: ${({ theme }) => theme.COLORS.WHITE_200_tags};
  background-color: ${({ theme }) => theme.COLORS.BG_600_header_line};
`