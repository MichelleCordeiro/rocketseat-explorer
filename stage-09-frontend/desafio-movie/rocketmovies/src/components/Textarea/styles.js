import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 20rem;

  background-color: ${({ theme }) => theme.COLORS.BG_800_input};
  color: ${({ theme }) => theme.COLORS.WHITE_100_h1_input_active};
  border-radius: 1rem;
  border: none;
  resize: none;

  padding: 1.9rem 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200_input};
  }
`