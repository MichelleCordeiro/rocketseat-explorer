import styled from 'styled-components'

export const Container = styled.section`
  padding-block: 5.1rem 4.5rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_100_h1_input_active};
    font-size: 3.2rem;
    font-weight: 400;
  }
`