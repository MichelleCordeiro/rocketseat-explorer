import { styled } from 'styled-components'

export const Container = styled.button`
  width: 99%;
  background-color: ${({ theme }) => theme.COLORS.BG_home_profile};

  text-align: left;
  border: none;
  border-radius: 1.6rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h1 {
    flex: 1;
    font-size: 2.4rem;
    font-weight: 700;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.WHITE_100_h1_input_active};
    margin-bottom: 0.8rem;
  }

  > p {
    margin-block: 1.6rem 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300_home_p};
    font-weight: 400;
  }

  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`