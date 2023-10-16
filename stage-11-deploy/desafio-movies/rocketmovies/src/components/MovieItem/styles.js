import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) => ($isnew ? 'transparent' : theme.COLORS.BG_800_input)};
  color: ${({ theme }) => theme.COLORS.GRAY_200_input};
  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.GRAY_300_home_p}` : 'none'};
  border-radius: 1rem;
  margin-bottom: 0.8rem;
  padding-right: 1.6rem;

  > input {
    width: fit-content;
    height: 5.6rem;
    padding: 1.6rem 0 1.6rem 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100_h1_input_active};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300_home_p};
    }
  }

  > button {
    border: none;
    background: none;

    > svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`