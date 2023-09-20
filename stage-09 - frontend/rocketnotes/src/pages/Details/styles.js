import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
  'header'
  'content';
  grid-template-rows: 10.5rem auto;

  width: 100%;
  height: 100vh;
`

export const Links = styled.ul`
  list-style: none;
  
  > li {
    margin-top: 1.2rem;
    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`