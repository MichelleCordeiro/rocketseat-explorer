import { styled } from 'styled-components'

export const Container = styled.div`
  > .stars {
    display: flex;
    gap: 0.3rem;

    > svg {
      stroke: ${({ theme }) => theme.COLORS.PINK}
    }
  }
`