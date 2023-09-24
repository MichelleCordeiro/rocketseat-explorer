import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  margin-block: 5.1rem 4rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE_100_h1_input_active};
    font-size: 3.2rem;
    font-weight: 400;

    padding-bottom: 1.6rem;
    margin-bottom: 2.8rem;
  }
`;