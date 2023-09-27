import { styled } from 'styled-components'

export const Container = styled.button`
  width: 100%;
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

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    margin-block: 1.6rem 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300_home_p};
    font-weight: 400;
  }

  > footer {
    width: 100%;
    display: flex;
  }
`;
