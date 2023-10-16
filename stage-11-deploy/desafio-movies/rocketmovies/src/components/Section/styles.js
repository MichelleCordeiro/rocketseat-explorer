import styled from 'styled-components'

export const Container = styled.section`
  padding-top: clamp(3rem, 5vw + 0.1rem, 5.1rem);
  padding-bottom: clamp(1.5rem, 4vw + 0.1rem, 4.5rem);

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_100_h1_input_active};
    font-size: clamp(2rem, 3vw + 1rem, 3.2rem);
    font-weight: 400;
    padding-bottom: 1rem;
  }
`