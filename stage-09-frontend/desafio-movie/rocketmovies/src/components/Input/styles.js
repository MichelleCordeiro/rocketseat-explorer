import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BG_800_input};
  color: ${({ theme }) => theme.COLORS.GRAY_200_input};

  border-radius: 1rem;
  margin-bottom: 0.8rem;

  > input {
    width: 100%;
    padding: 1.6rem 1.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE_100_h1_input_active};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200_input};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`