import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 111rem;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
  'header'
  'sectionTitle'
  'empty'
  'content';
  align-content: start;
  padding: 0 3rem 6rem 3rem;

  .empty {
    height: calc(100vh - 29.7rem);

    grid-area: empty;
    
    display: grid;
    place-content: center;
    text-align: center;
    line-height: 3rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300_home_p};
    border: solid 0.2rem ${({ theme }) => theme.COLORS.BG_700_details_btn};
    border-radius: 1.2rem;
    padding: 0 3rem;
  }

  @media (max-width: 460px) {
    > div svg {
      display: none;
    }
  }
`

export const SectionTitle = styled.div`
  grid-area: sectionTitle;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BG_900};
  border-radius: 1rem;
  border: none;

  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: clamp(1.2rem, 3vw + 0.05rem, 1.6rem);

  padding-block: clamp(1rem, 2vw + 0.07rem, 1.4rem);
  padding-inline: clamp(1rem, 1vw + 0.1rem, 3.2rem);
  margin-right: 0.3rem;
`

export const Content = styled.div`
  grid-area: content;
  max-height: calc(100vh - 29.7rem);
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
`