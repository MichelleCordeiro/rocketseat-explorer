import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 111.3rem;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-areas:
    'header'
    'sectionTitle'
    'content';
  grid-template-rows: 11.6rem auto;
  padding: 0 3rem 3rem 3rem ;
`

export const SectionTitle = styled.div`
  grid-area: sectionTitle;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > Section h2 {
    margin-bottom: 0;
  }
`

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BG_900};
  border-radius: 1rem;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.4rem 3.2rem;
  margin-right: 0.3rem;
`

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  :last-child {
    margin-bottom: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    padding-left: 10.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`;